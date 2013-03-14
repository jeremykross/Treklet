(ns treklet.core
  (:require [treklet.avatar        :as avatar   ]
            [treklet.util          :as util     ]
            [treklet.position      :as position ]
            [treklet.localstorage  :as storage  ]
            [treklet.constants     :as const    ]
            [treklet.service       :as service  ]
            [treklet.chat          :as chat     ]
            [treklet.comms         :as comms    ]
            [treklet.events        :as events   ]
            [treklet.gui            :as gui      ]
            [treklet.gui.kinds.main :as gui-m    ]
            [treklet.gui.kinds.alerts :as alert]
            [goog.dom         :as dom      ]
            [goog.dom.classes :as classes  ]
            [goog.dom.dataset :as dataset  ]
            [goog.fx          :as fx       ]
            [goog.fx.dom      :as domfx    ]
            [goog.fx.easing   :as ease     ]
            [goog.style       :as style    ]
            [goog.json        :as json     ]
            [goog.events      :as evt      ]
            [goog.async.Delay :as delA     ]
            [hiccups.runtime  :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups]
                   [treklet.macros :as macro]))

(def *avatar-name* (atom nil))
(def -uuid- (atom nil))

(defn evt-doc-clicked 
  [e]
  (if (not (classes/has (.-target e) "treklet"))
    (let [scroll     (dom/getDocumentScroll())
          x          (+ (.-clientX e) (.-x scroll))
          y          (+ (.-clientY e) (.-y scroll))
          target     (.-target e)
          plutoid    (dataset/get target "plutoid")
          size       (style/getSize target)] 
      (avatar/avatar-move @-uuid- x y)
      (comms/notify-server "move" {"uuid" @-uuid- "x" x "y" y
                             "plutoid"  plutoid
                             "elem-relative-x" (.-offsetX e) "elem-relative-y" (.-offsetY e) 
                             "width" (.-width size) "height" (.-height size)}))))

(def evt-speech-keypress
  ((fn []
    (let [required-time 1000 
          last-call-time (atom 0)] 
    (fn [e]
      (let [cur-time (. (js/Date.) (getTime))
            duration (- cur-time @last-call-time)
            phrase   (.-value (.-target e))]
        (when (and (= (.-keyCode e) 13) (> duration required-time))
          (util/atom-set! last-call-time cur-time) 
          (avatar/avatar-speak @-uuid- phrase)
          (comms/notify-server "speak" {"uuid" @-uuid- "phrase" phrase})
          (set! (.-value (.-target e)) "")))
      false)))))

(defn evt-speech-focus
  [e]
  (chat/signal-input-focused)
  true)

(defn evt-speech-blur
  [e]
  (chat/signal-input-blurred)
  true)

(defn evt-doc-keyup
  [e]
  (when (= e.keyCode 35)
    (avatar/toggle-avatars-visibility)))

(defn evt-speech-click
  [e]
  (js/alert "Box was clicked"))

(defn evt-avatar-dblclick
  [e]
  (events/signal-overlay-changed {:visible true})
  (let [popup (js* "new treklet_js.gui.kinds.MainPopup")]
    (.scrollTo js/window 0 0)
    (.show popup)))

(hiccups/defhtml tmpl-make-speech-input
  []
  [:div   {"id" "treklet-speech-input" "class" "treklet"}
  [:input {"class" "treklet treklet-input-box" "type" "text" "placeholder" "Just say hello..." "placeholder-text" "Just say hello..."}]])

(defn enable-clicks
  [enabled]
  (({true evt/listen false evt/unlisten} enabled) (.-body js/document) "click" evt-doc-clicked))

(defn start 
  [saved-avatar]
  (if (not= (js* "typeof onTrekletStarted") "undefined")
    (js/onTrekletStarted))
  (service/init)

  (events/slot-avatar-changed 
    (fn [avatar]
      (storage/write "saved-avatar" avatar)
      (util/atom-set! *avatar-name* (avatar :username))
      (util/atom-set! -uuid- (avatar :uuid))
      (let [elem (avatar/dom-avatar-elem @-uuid-)]
        (evt/listen elem "dblclick" evt-avatar-dblclick)
        (classes/add elem "treklet-user-avatar"))))

  (events/slot-overlay-changed
    (fn [e]
      (enable-clicks (not (e :visible)))))

  (enable-clicks true)

  (let [input-box  (dom/htmlToDocumentFragment (tmpl-make-speech-input))
        input-elem (dom/getElementByClass "treklet-input-box" input-box)]
    (dom/append document.body input-box)
    (evt/listen input-box  "keypress" evt-speech-keypress)
    (evt/listen input-elem "focus"    evt-speech-focus)
    (evt/listen input-elem "blur"     evt-speech-blur)
    (js/setTimeout (fn [] (classes/add input-box "inplace") 1000)))

  (comms/react-server "mesg-for-user"
    (fn [data]
      (events/signal-mesg-for-user (data :from-uuid) (data :user-mesg))))

  (comms/react-server "user-arrival" 
                (fn [data] 
                  (events/signal-user-arrival (data :uuid))
                  (avatar/add-avatar (data :avatar))))
  (comms/react-server "user-departure" 
                (fn [data]
                  (events/signal-user-departure (data :uuid))
                  (avatar/remove-avatar (data :uuid))))
  (comms/react-server "user-locale-changed" 
                (fn [data]
                  (if (data :last-move)
                    (avatar/dom-locale-notice (data :username) (data :locale) ((data :last-move) :x) ((data :last-move) :y))))) 
  (comms/react-server "user-speak"   
                (fn [data] 
                  (if (not (= (data :uuid) @-uuid-))
                    (avatar/avatar-speak (data :uuid) (data :phrase)))))
  (comms/react-server "user-move" 
                (fn [data] 
                  (when (not (= (data :uuid) @-uuid-))
                    (let [element          (dom/getElementByClass (str "_" (data :plutoid)))]
                      (if element
                        (let [offset       (style/getPageOffset element)
                              size         (style/getSize element)
                              pct-along-x  (/ (data :elem-relative-x) (data :width))
                              pct-along-y  (/ (data :elem-relative-y) (data :height))
                              x            (+ (.-x offset) (* (.-width size) pct-along-x))
                              y            (+ (.-y offset) (* (.-height size) pct-along-y))]
                          (avatar/avatar-move (data :uuid) x y))
                        (avatar/avatar-move (data :uuid) (data :x) (data :y)))))))
  (comms/notify-server "ready")

  (comms/react-server "accepted"
    (fn [data]
      (let [avatar (merge {:uuid (data :uuid)} saved-avatar )]
        (avatar/add-avatar avatar)
        (events/signal-avatar-changed avatar)
        (comms/notify-server "arrival" {"uuid" (avatar :uuid) "avatar" avatar "locale" document.URL})))))

(defn ^:export localUuid
  []
  @-uuid-)

(defn prompt-for-username
  []
  (alert/input-box "Please Enter a Username:" "There's no signup, use anything you like." "" ["Alright Let's Go!"] 
                   (fn [resp] 
                     (start (avatar/make-avatar 
                       (resp :input)
                       "#CEF6F6" "#008800" "#FFFF81" "#FA5882")))))

(defn ^:export main
  []
  (when (= (aget js/window "TREKLET_RUNNING") js/undefined)
    (aset js/window "TREKLET_RUNNING" true)
    (position/dom-generate-plutoid (.-body js/document))
    ;(js/setTimeout (fn [] (alert/input-box "Please Enter a Username:" "There's no signup, use anything you like." "" ["Ok"])) 5000)
  
    (let [notification (new enyo.Notification)
          glass-pane   (dom/htmlToDocumentFragment "<div id='treklet_glass-pane'></div>")]
      (.renderInto notification glass-pane)
      (js/setTimeout #(.sendNotification notification (util/clj->js {:title "Hey!" :message "Please Support our <a href='google.com' style='color:white;'> Kickstarter! </a>"})) 2000)
      (dom/append (.-body js/document) glass-pane))
      
    (storage/init 
      (fn []
        (storage/read "saved-avatar" 
          (fn [saved-avatar]
            (if (not saved-avatar)
              (prompt-for-username)
              ;(start (avatar/make-avatar 
              ;        (js/prompt "Please Enter a Username:" ) 
              ;         "#CEF6F6" "#008800" "#FFFF81" "#FA5882"))
              (start saved-avatar))))))))

(js/setTimeout (fn [] (main)) 1000)
