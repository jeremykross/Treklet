(ns treklet.avatar
  (:require-macros [hiccups.core      :as hiccups   ]
                   [treklet.macros    :as macro     ])
  (:require [hiccups.runtime          :as hiccupsrt ]
            [treklet.util             :as util      ]
            [treklet.localstorage     :as storage   ]
            [treklet.constants        :as const     ]
            [treklet.events           :as events    ] 
            [goog.dom                 :as dom       ]
            [goog.dom.forms           :as form      ]
            [goog.json                :as json      ]
            [goog.events              :as evt       ]
            [goog.dom.classes         :as classes   ]
            [goog.style               :as style     ]
            [goog.array               :as arr       ]
            [goog.net.IframeIo        :as iframeio  ]
            [goog.ui.Dialog           :as gdialog   ]
            [goog.ui.ColorPicker      :as gcp       ]
            [goog.ui.PopupColorPicker :as gpcp      ]
            [goog.ui.ColorButton      :as gcb       ]))

(def enyo (js* "enyo"))
(def onyx (js* "onyx"))

(defrecord Avatar [username balloon-bg-color balloon-text-color name-bg-color name-text-color guid]) 

(def -uuid- (atom nil))
(def -local-avatar- (atom nil))

(events/slot-avatar-changed
  (fn [avatar]
    (util/atom-set! -local-avatar- avatar)
    (util/atom-set! -uuid- (avatar :uuid))))

;(macro/make-event "avatar-changed")
;(macro/make-event "avatar-spoke"  )

(def *avatar-pane* (dom/htmlToDocumentFragment "<div id='treklet-avatar-pane'></div>")) 

(defn dom-append
  [html-fragment]
  (let [elem (dom/htmlToDocumentFragment html-fragment)]
    (dom/append document.body elem)
    elem))

(defn make-avatar 
  [username balloon-bg-color balloon-text-color name-bg-color name-text-color]
  {:username username :balloon-bg-color balloon-bg-color :balloon-text-color balloon-text-color :name-bg-color name-bg-color :name-text-color name-text-color})

(defn dom-add-avatar-pane
  []
  (dom/append (dom/getElement "treklet-root") *avatar-pane*))

(hiccups/defhtml tmpl-make-avatar
  [uuid username img-src]
  [:div   {"class" "avatar" "id" (str "treklet-avatar-" uuid) }
    [:img {"src" img-src "onerror" (str "this.src=" "'" const/-image-dir- "anon.png" "'") }]
    [:div {"class" "avatar-balloon" "id" (str "treklet-avatar-balloon-" username) } "Now is the time for all good men to come to the aid of their country."]
    [:span.avatar-name username]]) 

(hiccups/defhtml tmpl-make-avatar-design
  [username]
  [:div.avatarDesignDialog
   [:form {"enctype" "multipart/form-data" "method" "POST" "action" (str const/-file-addr- "avatar-upload")}
    [:div
      "Username:" [:br]
      [:input.username {"name" "username"    "type" "text" "value" username}]]
    [:div
     "Image:" [:br]
     [:input {"name" "avatarimage" "type" "file"}]]]
   [:div.button.name-bg-color] 
   [:div.button.name-text-color]
   [:div.button.balloon-bg-color]
   [:div.button.balloon-text-color]
   [:div.preview {"style" "float:right"}]])

(hiccups/defhtml tmpl-make-locale-notice
  [username new-locale]
  [:div.locale-changed-notice
   (str username " is now at ") [:br]
   [:a {:href new-locale} (util/ellipsize new-locale "64")]])

(defn dom-avatar-elem      [username   ]
  (dom/getElement (str "treklet-avatar-" username)))
(defn dom-balloon-elem     [avatar-elem]
  (if (string? avatar-elem) 
    (dom-balloon-elem (dom-avatar-elem avatar-elem))
    (dom/getElementByClass "avatar-balloon" avatar-elem )))
(defn dom-img-elem         [avatar-elem]
  (first (arr/toArray (dom/getElementsByTagNameAndClass "img" nil avatar-elem))))
(defn dom-name-elem        [avatar-elem]
  (if (string? avatar-elem) 
    (dom-name-elem (dom-avatar-elem avatar-elem))
    (first (arr/toArray (dom/getElementsByTagNameAndClass "span" nil avatar-elem)))))

(defn get-uuids
  []
  (map #(.replace (.-id %) "treklet-avatar-" "") (arr/toArray (dom/getElementsByClass "avatar"))))

(defn username-for-uuid [uuid]
  (dom/getTextContent (dom-name-elem (dom-avatar-elem uuid))))

(defn uuid-for-username [username]
  (first (filter #(= (username-for-uuid %) username) (get-uuids))))

(defn dom-hide-avatars
  []
  (classes/remove *avatar-pane* "anim-show")
  (classes/add    *avatar-pane* "anim-hide")
  (js/setTimeout
    (fn []
      (style/setOpacity *avatar-pane* 0)) 250))

(defn dom-show-avatars 
  []
  (classes/remove *avatar-pane* "anim-hide")
  (classes/add    *avatar-pane* "anim-show")
  (js/setTimeout
    (fn []
      (style/setOpacity *avatar-pane* 1)) 250))

(def toggle-avatars-visibility
  ((fn []
    (let [call-cnt (atom 0)]
      (fn []
        (swap! call-cnt inc)
        (if (= (mod @call-cnt 2) 0)
          (dom-show-avatars)
          (dom-hide-avatars)))))))

(defn dom-locale-notice
  [username new-locale x y]
  (let [notice (dom-append 
                 (tmpl-make-locale-notice username new-locale))]
    (util/position-center notice x y)
    (classes/add notice "anim-notify")
    (js/setTimeout 
      (fn []
        (style/setOpacity notice 0)
        (js/setTimeout 
         (fn []
          (dom/removeNode notice)) 500)) 5000)))

(defn dom-append-avatar
  [avatar]
  (let [uuid     (avatar :uuid)
        username (avatar :username)
        img      (str const/-file-addr- "images/" uuid ".png")
        avatar   (dom/htmlToDocumentFragment (tmpl-make-avatar uuid username img))
        balloon  (dom/getElementByClass "avatar-balloon" avatar)]
    (style/setStyle balloon "display" "none")
    (dom/append document.body avatar)))
    
(defn avatar-speak
  [username phrase]
  (events/signal-avatar-spoke username phrase)
  (when (not= (.indexOf phrase "~/") 0)
    (let [balloon (dom-balloon-elem username)]
      (set! (.-textContent balloon) phrase)
      (style/setOpacity balloon 1)
      (classes/remove   balloon "anim-wither")
      (classes/add      balloon "anim-pop")
      (style/setStyle balloon "display" "block")
      (js/setTimeout 
        (fn [] 
          (style/setOpacity balloon 0)
          (classes/add balloon "anim-wither")
          (classes/remove balloon "anim-pop")
          (js/setTimeout
            (fn []
              (style/setStyle balloon "display" "none")) 1000)) 10000))))

(defn avatar-move
  [username x y]
  (let [avatar      (dom-avatar-elem username)
        size        (style/getSize avatar)
        x-pos       (- x (/ (.-width  size)  2))
        y-pos       (- y (/ (.-height size)  2))]
    (events/signal-user-repositioned username x y)
    (style/setPosition avatar x-pos y-pos)))

(defn get-position
  [username]
  (let [pos (style/getPosition (dom-avatar-elem username))]
    {:x (.x pos) :y (.y pos)}))


(defn remove-avatar
  ([username] (remove-avatar username nil))
  ([username callback]
  (let [avatar (dom-avatar-elem username)]
    (classes/add avatar "anim-exit")
    (js/setTimeout
      (fn []
        (style/setOpacity avatar 0)
        (dom/removeNode avatar)
        (if callback (callback))) 270))))

(defn dom-prepare-avatar
  [avatar]
  (let [avatar-elem (dom-avatar-elem  (avatar :uuid))
        av-img      (dom-img-elem     avatar-elem)
        av-balloon  (dom-balloon-elem avatar-elem)
        av-username (dom-name-elem    avatar-elem)
        img-size    (style/getSize     av-img)
        img-offset  (style/getPosition av-img)
        add-offset   7]
    (style/setPosition av-balloon (+ (.-x img-offset) (.-width img-size) add-offset))
    (style/setStyle    av-balloon  "background-color" (avatar :balloon-bg-color))
    (style/setStyle    av-balloon  "color"            (avatar :balloon-text-color))
    (style/setStyle    av-username "background-color" (avatar :name-bg-color))
    (style/setStyle    av-username "color"            (avatar :name-text-color))
    (dom/setTextContent av-username (avatar :username))

    (classes/add avatar-elem "anim-entrance")
    (style/setStyle avatar-elem "z-index" "16000000")
    (js/setTimeout (fn [] (style/setStyle avatar-elem "z-index" "auto")) 520)))

(defn add-avatar
  [avatar]
    (dom-append-avatar  avatar)
    (dom-prepare-avatar avatar))

(defn update-user-avatar
  [avatar]
  (remove-avatar (avatar :uuid) 
    (fn []
      (add-avatar avatar)
      (events/signal-avatar-changed avatar))))
