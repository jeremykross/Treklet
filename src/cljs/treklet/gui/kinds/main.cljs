(ns treklet.gui.kinds.main
  (:require [treklet.gui.enyo :as enyo]
            [treklet.gui.state :as state]
            [treklet.util :as u]
            [treklet.events :as evt])
  (:require-macros [treklet.macros :as m]))

(def -state- state/-reference-)
(swap! -state- merge {:manager-kind {:panels ["Avatar" "Plugins"]
                                     :panel-index 0}})

(def -bottom-button- "display:inline-block;width:85%;margin:10px")

(enyo/kind
  {:name "treklet_js.gui.kinds.MainPopup"
   :kind "onyx.Popup"
   :scrim false
   :scrimClassName "treklet_scrim"
   :autoDismiss false
   :modal false
   :floating true
   :scim true
   :classes "treklet_main-popup"
   :handlers {:onDismiss "hide"}
   :components
    [{:kind "treklet_js.gui.kinds.Manager"}]})

(enyo/kind
  {:name "treklet_js.gui.kinds.Manager"
   :kind "enyo.Control"
   :layoutKind "enyo.FittableRowsLayout"
   :style "width: 100%; height:100%"
   :classes "onyx"
   :events {:onDismiss ""}
   :okTap
    (m/enyo-method
      [self]
      (evt/signal-overlay-changed {:visible false})
      (.updateAvatar (.-avatar (.-$ self)))
      (.doDismiss self))
   :components
    [{:kind "onyx.RadioGroup" 
      :name "managerTabs"
      :style "display:block;text-align:center;padding:10px;"
      :controlClasses "onyx-tabbutton"
      :components
        [{:content "Avatar" :active true}
         {:content "Plugins"}]}
     {:kind "enyo.Panels"
      :fit true 
      :index 0
      :name "managerPanels"
      :style "background-color:black;"
      :arrangerKind "HFlipArranger"
      :components 
        [{:name "avatar" :kind "treklet_js.gui.kinds.AvatarDesign"}
         {:name "plugin" :kind "PluginManager"}]}
     {:style "text-align:center"
      :components
        [{:kind "onyx.Button" :style -bottom-button- :content "Ok" :ontap "okTap"}]}]
   :create
     (m/enyo-method 
       [self]
       (.inherited self js/arguments)
       (m/let-native 
         [manager-tabs  (.-managerTabs   (.-$ self))
          manager-panes (.-managerPanels (.-$ self))]

         (enyo/make-subscribable manager-tabs  "active")
         (enyo/make-subscribable manager-panes "index")

         (enyo/bind-to-state manager-tabs "active"
                             -state- "manager-kind.panel-index"
          :l2r (fn [x] (if x (u/index-of ((@-state- :manager-kind) :panels) (aget x "content")))))
         (enyo/bind-to-state manager-panes "index"
                             -state- "manager-kind.panel-index")))})
