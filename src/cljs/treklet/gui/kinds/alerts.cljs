(ns treklet.gui.kinds.alerts
  (:require [treklet.gui.enyo :as enyo]
            [treklet.util :as u]
            [goog.dom.classes :as classes])
  (:require-macros [treklet.macros :as m]))



(defn input-box
  [title message placeholder buttons cb]
  (m/let-native
    [box (new js/intelimap_js.gui.kinds.MessageBox (u/clj->js {:hideCallback cb}))]
    (.setup box title message placeholder buttons)
    (.show box)))

(defn message-box
  [title message buttons]
  (input-box title message nil buttons nil))

(defn yes-no-dialog
  [title mesg yes-cb]
  (input-box title mesg nil ["Yes" "No"]
    (fn [resp] 
      (when (= (m/->. getContent (resp :btn)) "Yes")
        (when yes-cb (yes-cb))))))

(enyo/kind
  {:name "intelimap_js.gui.kinds.MessageBox"
   :kind "onyx.Popup"
   :floating true
   :centered true
   :scrim false
   :scrimClassName "custom-scrim"
   :style "background-color:white;color:black;-webkit-box-shadow:19px 19px 25px rgba(0,0,0,.3) !important;background-image:none;padding:30px;z-index:160000;"
   :modal true
   :autoDismiss false
   :classes "onyx-light message-box"
   :published {:hideCallback nil}
   :ondown "keydown"
   :components
    [{:name "title" :allowHtml true :classes "title"}
     {:name "message" :allowHtml true :classes "message"}
     {:kind "onyx.InputDecorator" :style "box-sizing:border-box;display:block;width:90%;margin: 0 auto;"
      :components
      [{:kind "onyx.Input" :name "inputBox"}]}
     {:tag "div" :name "buttons" :style "text-align:center;margin: 0 auto" :content "Buttons here!"}] 

   :created
    (m/enyo-method
      [self]
      (.inherited self js/arguments))
   :keydown
    (m/enyo-method
      [self sender evt]
      (if (= (.-keyCode evt) 13) (.hide self)))
   :show
    (m/enyo-method
      [self]
      (.inherited self js/arguments)
      (.addClass self "anim-scale-in")
      (classes/add js/document.body "filter-blur"))
   :hide
    (m/enyo-method
      [self sender]
      (let [hide-callback (.getHideCallback self)
            input-box     (.-inputBox (.-$ self))]
        (.addClass self "anim-scale-out")
        (js/setTimeout (fn [] 
                         (if hide-callback (hide-callback {:input (.getValue input-box) :btn sender}))
                         (classes/remove js/document.body "filter-blur")
                         (.setShowing self false)) 250)))
   :btnTap
    (m/enyo-method
      [self sender evt]
      (.hide self sender))
   :setup
    (m/enyo-method 
      [self title message placeholder buttons]
      (m/let-native [title-control (.-title (.-$ self))
                     mesg  (.-message (.-$ self))]
                  (.setContent title-control title)
                  (.setContent mesg message))
      (let [input-box (.-inputBox (.-$ self))]
        (if (nil? placeholder)
          (.applyStyle input-box "display" "none")
          (.setPlaceholder input-box placeholder)))
      (let [width  (/ 30 (count buttons))
            margin (/ 5 (count buttons))
            margin-str (str "15px " margin "% 0px " margin "%;")]
        (doseq [btn buttons]
          (.addChild (.-buttons (.-$ self)) 
                     (new onyx.Button (u/clj->js {:owner self
                                                  :ontap "btnTap"
                                                  :style (str "background-image:none;background-color:c4e3fe;" 
                                                              "margin:" margin-str)
                                                  :content btn})))))
      (.render self))})
