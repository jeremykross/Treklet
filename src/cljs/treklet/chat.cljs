(ns treklet.chat
  (:require        [hiccups.runtime   :as hiccupsrt]
                   [goog.dom          :as dom      ]
                   [goog.dom.classes  :as classes  ]
                   [goog.style        :as style    ]
                   [treklet.constants :as const    ]
                   [treklet.avatar    :as avatar   ])
  (:require-macros [hiccups.core :as hiccups]
                   [treklet.macros :as macro]))


(macro/make-event "input-focused")
(macro/make-event "input-blurred")

(defn tmpl-make-chat-log []
  (hiccups/html
    [:div {:id "treklet-chat-log"}]))

(defn tmpl-make-chat-line 
  [id username phrase] 
  (hiccups/html
    [:div.treklet-chat-line {:id id}
     [:img {:src (str const/-image-dir- username ".png") :onerror (str "this.src=" "'" const/-image-dir- "anon.png" "'") }]
     [:div.treklet-line-phrase [:span {:style "font-weight: bold;"} (str username ": ")]  phrase]
     [:div {:style "clear:both;"}]]))

(defn tmpl-make-chat-box
  []
  (hiccups/html
    [:div#treklet-chat-box
      [:div#treklet-chat-window]]))

(defn get-history-elem
  []
  (dom/getElement "treklet-chat-box")) 

(defn get-window-elem
  []
  (dom/getElement "treklet-chat-window"))

(defn prepare
  [input-elem]
  
  (slot-input-focused 
    (fn [] 
      (style/setStyle (dom/getElement "treklet-chat-box") "visibility" "visible")
      (style/setStyle   (dom/getElement "treklet-chat-box") "z-index" 16000004)
      (style/setOpacity (dom/getElement "treklet-chat-box") 1)))

  (slot-input-blurred 
    (fn [] 
      (style/setOpacity    (dom/getElement "treklet-chat-box") 0)
      (js/setTimeout (fn [] (style/setStyle      (dom/getElement "treklet-chat-box") "visibility" "hidden")) 500)
      (style/setStyle      (dom/getElement "treklet-chat-box") "z-index" 16000001)))

  (avatar/slot-avatar-spoke
    (fn [uuid phrase]
      (let [window       (get-window-elem)
            window-pos   (style/getPosition window)
            username     (avatar/username-for-uuid uuid)
            id           (hash (str (. (js/Date.) (getTime)) uuid phrase))
            line-frag    (dom/htmlToDocumentFragment (tmpl-make-chat-line id username phrase))]
        (dom/append window line-frag)
        (js/setTimeout
          (fn []
            (let [line-elem    (dom/getElement (str id))
                  line-size    (style/getSize line-elem)
                  balloon-elem (avatar/dom-balloon-elem uuid)
                  phrase-elem  (dom/getElementByClass "treklet-line-phrase" line-elem)]
              (classes/add line-elem "initial-state")
              (style/setStyle phrase-elem "background-color" (style/getStyle balloon-elem "background-color"))
              (style/setStyle phrase-elem "color" (style/getStyle balloon-elem "color"))
              (style/setPosition (get-window-elem) (.-x window-pos) (- (.-y window-pos) (+ 5 (.-height line-size))))))
          10))))
  (dom/append (.-body js/document) (dom/htmlToDocumentFragment (tmpl-make-chat-box))))

