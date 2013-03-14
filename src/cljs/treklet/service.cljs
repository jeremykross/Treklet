(ns treklet.service
  (:require [treklet.events    :as events  ] 
            [treklet.comms     :as comms   ]
            [treklet.util      :as util    ]
            [treklet.avatar    :as avatar  ]
            [treklet.constants :as const   ]
            [treklet.gui.kinds.alerts       :as alert     ]
            [treklet.localstorage :as storage ]
            [goog.ui.TabBar    :as gtabbar ]
            [goog.ui.Dialog    :as gdialog ]
            [goog.json         :as json    ]
            [goog.dom          :as dom     ]
            [goog.dom.dataset  :as dataset ]
            [goog.style        :as style   ]
            [goog.array        :as arr     ]
            [goog.events       :as evt     ]
            [hiccups.runtime   :as hicrt   ])
  (:require-macros [hiccups.core   :as hiccups]
                   [treklet.macros :as m      ]))

(def -uuid-            (atom nil)) 
(def -running-plugins- (atom []))
(def -mapping-         {})

(events/slot-avatar-changed
  (fn [avatar]
    (util/atom-set! -uuid- (avatar :uuid))))

(events/slot-plugin-run
  (fn [plugin-name href]
    (storage/add-plugin plugin-name href)))

(defn load-plugin
  [plugin-name url mime-type div-elem]
  ; Make an element of class treklet-plugin-div 
  ; load the content into that, change the css accordingly.
  (.load js/caja div-elem
                 (util/clj->js {:rewrite identity})
    (fn [frame]
      (m/->. code frame url mime-type)
      (m/->. api  frame (util/clj->js -mapping-))
      (m/->. run  frame
        #(events/signal-plugin-run plugin-name url)))))

(defn start-plugin
  [plugin-name plugin-href]
  (when true ;(not (some #{plugin-href} @-running-plugins-))
    (let [plugin-id (str "treklet-plugin-" (count @-running-plugins-))
          plugin-div (dom/htmlToDocumentFragment (str "<div id='" plugin-id "' class='treklet-plugin-div'></div>"))]
      (swap! -running-plugins- conj plugin-href)
      (dom/append (.-body js/document)  plugin-div)
      (load-plugin plugin-name plugin-href "text/html" plugin-div))))


(defn ^:export catalogueLinks
 []
 (doseq [link (arr/toArray (dom/getElementsByTagNameAndClass "a" "treklet-plugin-link"))]
   (evt/listen link "click" 
    (fn [e]
      (let [current-target (.-currentTarget e)
            plugin-name    (dataset/get link "pluginName")
            affirmative-cb (fn [] 
                             (let [plugin-href (.getAttribute current-target "href")]
                               (start-plugin plugin-name plugin-href)))]
        (alert/yes-no-dialog "Run Plugin?" plugin-name affirmative-cb))
      (.preventDefault e)
      false))))

(defn init 
  []
  (storage/read "plugins"
    (fn [plugins]
      (doseq [[k v] plugins]
        (when (v :autostart)
          (start-plugin (v :name) (v :href))))))

  (catalogueLinks)

  (.initialize js/caja (util/clj->js
    {:cajaServer (str const/-server-addr- ":8080/")
     :debug true}))

  (.whenReady js/caja
    (fn []
      (m/caja-defn get-host-user
        []
        @-uuid-)

      (m/caja-defn get-users
        []
        (util/clj->js (map #(.replace (.-id %) "treklet-avatar-" "") 
                           (arr/toArray (dom/getElementsByClass "avatar")))))

      (m/caja-defn send-to-user
        [uuid mesg]
        (comms/notify-server "mesg-for-user" {"target-uuid" uuid "user-mesg" mesg})
        nil)

      (m/caja-defn send-to-locale
        [locale mesg]
        (comms/notify-server "mesg-for-locale" {"user-mesg" mesg} )
        nil)

      (m/caja-defn current-locale
        []
        (.-URL js/document))

      (m/caja-defn add-user-arrival-callback
        [cb]
        (events/slot-user-arrival cb)
        nil)

      (m/caja-defn add-user-departure-callback
        [cb]
        (events/slot-user-departure cb)
        nil)

      (m/caja-defn add-user-repositioned-callback
        [cb]
        (events/slot-user-repositioned cb)
        nil)

      (m/caja-defn add-mesg-for-user-callback
        [cb]
        (events/slot-mesg-for-user 
          (fn [from data] 
            (cb from (util/clj->js data))))
        nil)

      (m/caja-defn add-user-spoke-callback
        [cb]
        (events/slot-avatar-spoke cb)
        nil)

      (m/caja-defn get-user-position
        [uuid]
        (util/clj->js (avatar/get-position uuid)))

      (m/caja-defn uuid-for-username
        [username]
        (avatar/uuid-for-username username))

      (m/caja-defn get-user-info
        [uuid]
        (let [username      (avatar/username-for-uuid uuid)
              username-elem (avatar/dom-name-elem uuid) 
              balloon-elem  (avatar/dom-balloon-elem uuid)]

          (util/clj->js {:username          username
                         :imgPath          (str const/-image-dir- username ".png")
                         :usernameBgColor  (style/getStyle username-elem "background-color")
                         :usernameFgColor  (style/getStyle username-elem "color")
                         :balloonBgColor   (style/getStyle balloon-elem  "background-color") 
                         :balloonFgColor   (style/getStyle balloon-elem  "color")})))

      (m/caja-defn set-timeout
        [x delayof]
        (js/setTimeout x delayof))

      (m/caja-defn safe-alert [x]
        (js/alert x))

      (def -mapping-
        {:alert tame-safe-alert
         :setTimeout tame-set-timeout
         :getUsers tame-get-users
         :getUserPosition tame-get-user-position
         :getUserInfo tame-get-user-info
         :getHostUser tame-get-host-user
         :sendToUser tame-send-to-user
         :sendToLocale tame-send-to-locale
         :currentLocale tame-current-locale
         :uuidForUsername tame-uuid-for-username
         :addMesgForUserCallback tame-add-mesg-for-user-callback
         :addUserRepositionedCallback tame-add-user-repositioned-callback
         :addUserSpokeCallback tame-add-user-spoke-callback
         :addUserDepartureCallback tame-add-user-departure-callback
         :addUserArrivalCallback tame-add-user-arrival-callback}))))

