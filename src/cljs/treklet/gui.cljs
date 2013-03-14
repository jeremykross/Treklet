(ns treklet.old-gui
  (:require [treklet.util          :as util     ]
            [treklet.constants     :as const    ]
            [treklet.events        :as events   ]
            [treklet.localstorage  :as storage  ]
            [treklet.avatar        :as avatar   ]
            [goog.json             :as json     ]
            [goog.dom              :as dom      ]
            [goog.net.IframeIo     :as iframeio ])
  (:require-macros [treklet.macros :as m]))

(def enyo (js* "enyo"))
(def onyx (js* "onyx"))

(defn make-content-modifier
  [component property]
  (fn []
    (this-as this
      (m/->. setContent (m/enyo-$ component) (aget this property)))))

(m/enyo-kind
  {:name "MainWindow"
   :kind "enyo.Control"
   :classes "onyx"
   :tabs ["pluginManager" "avatarDesign"]
   :setAvatar (fn [avatar] (this-as this (m/->. setAvatar (m/enyo-$ "avatarDesign") avatar)))
   :components
     [{:tag "div" :style "text-align:center;" :components
       [{:tag "span" :style "display:inline-block;" :components
        [{:kind "onyx.RadioGroup" :name "tabGroup" :style "padding:10px;" :controlClasses "onyx-tabbutton" :components
          [{:name "tabAvatar" :content "Avatar" :widget "avatarDesign" :active true :ontap "evt-tab-changed"} {:name "tabPlugins" :widget "pluginManager" :content "Plugins" :ontap "evt-tab-changed"}]}]}]}
      {:name "tabs" :components 
        [{:kind "PluginManager" :name "pluginManager" :showing false}
         {:kind "AvatarDesign"  :name "avatarDesign"}]}]
   :evt-tab-changed
    (fn [sender d]
      (this-as this
        (doseq [tab (m/->.- tabs this)]
          (m/->. hide (m/enyo-$ tab)))
        (m/->. show    (m/enyo-$ (m/->.- widget sender)))))})

(m/enyo-kind 
  {:name    "Plugin"
   :kind    "enyo.Control"
   :classes "onyx"

   :style   "padding:2px"

   :published
    {:label ""
     :pluginName ""
     :pluginHref ""
     :autoStart false}

   :labelChanged (make-content-modifier "labelControl" "label")

   :autoStartChanged 
    (fn []
      (this-as this
        (m/->. setValue (m/enyo-$ "toggleControl") (aget this "autoStart"))))

   :create
    (fn [] 
      (this-as this 
        (m/->. inherited this (js* "arguments"))
        (m/->. labelChanged this)
        (m/->. autoStartChanged this)))

   :evt-check-changed
    (fn [sender]
      (this-as this
        (m/->. bubble this "onCheckChanged" {:checked (m/->. getValue sender) :plugin this})))

   :evt-toggle-changed
    (fn [sender]
     (this-as this
      (m/->. bubble this "onToggleChanged" {:isOn (m/->. getValue sender) :plugin this})))

   :components
    [{:kind "onyx.Checkbox" :name "checkbox" :onChange "evt-check-changed" :style "float:left;margin-right:5px"} 
     {:name "labelControl" :content "Test" :style "float:left;font-size:17px;line-height:31px;"}
     {:kind "onyx.ToggleButton" :name "toggleControl" :onChange "evt-toggle-changed" :style "float:right"} 
     {:style "clear:both;"}]})

(m/enyo-kind
  {:name "PluginManager"
   :kind "enyo.Control"
   :classes "onyx"
   :style "width:100%;"
   
   :checkedPlugins (atom {})

   :handlers 
    {:onCheckChanged  "evt-check-changed"
     :onToggleChanged "evt-toggle-changed"}

   :addPlugin
    (fn [plugin-map]
      (this-as this
        (m/->. createComponent this (util/clj->js (merge plugin-map {:kind "Plugin" :container (m/enyo-$ "pluginDiv") :label (util/ellipsize (plugin-map :pluginName) 35) :autoStart (plugin-map :pluginAutoStart) })))
        (m/->. render (m/enyo-$ "pluginDiv"))))

   :create
    (fn [] 
      (this-as this 
        (m/->. inherited this (js* "arguments"))
        (storage/read "plugins"
          (fn [plugins]
            (when plugins
              (doseq [[k v] plugins]
                (m/->. addPlugin this {:pluginName (v :name) :pluginHref (v :href) :pluginAutoStart (v :autostart) } )))))))

   :evt-check-changed
    (fn [sender e]
      (this-as this
        (let [checked-plugins (m/->.- checkedPlugins this)
              plugin (e :plugin)
              href (m/->. getPluginHref plugin)]
          (if (e :checked)
            (swap! checked-plugins assoc href plugin)
            (swap! checked-plugins dissoc href))))) 

   :evt-toggle-changed
    (fn [sender e]
      (let [plugin (e :plugin)]
        (if (e :isOn)
          (storage/modify-plugin (m/->. getPluginHref plugin)
                                 {:autostart true})
          (storage/modify-plugin (m/->. getPluginHref plugin)
                                 {:autostart false}))))

   :evt-delete-clicked
    (fn [sender e]
      (this-as this
       (let [plugins @(m/->.- checkedPlugins this)]
         (doseq [[href plugin] plugins]
           (storage/remove-plugin href)
           (m/->. destroy plugin)))))

   :components 
    [{:style "padding:2px;" :components
       [{:content "Installed Plugins:" :style "position:relative;top:15;float:left;"}
        {:kind "onyx.Button" :style "float:right;" :ontap "evt-delete-clicked" :content "Delete Checked"} 
        {:style "clear:both;"}
        {:tag "div" :name "pluginDiv" :style "max-height:275px;overflow:auto;padding:5px;margin:5px;border:1px solid lightgrey;" :components 
         []}]}]})

(m/enyo-kind
  {:name "AvatarDesign"
   :kind "enyo.Control"
   :classes  "onyx"
   :published {:avatar nil}

   :avatarChanged
    (fn []
      (this-as this
        (let [lookup {:name-bg-color       "usernameBackgroundColorBtn"
                      :name-text-color     "usernameTextColorBtn"
                      :balloon-bg-color    "balloonBackgroundColorBtn"
                      :balloon-text-color  "balloonTextColorBtn"}]
              (js/setTimeout (fn [] 
                (let [avatar (m/->. getAvatar this)]
                  (aset (m/->. hasNode (m/enyo-$ "usernameInput")) "value" (avatar :username))
                  (doseq [k (keys lookup)]
                    (let [button (m/enyo-$ (lookup k))
                          color  (avatar k)]
                    (m/->. applyStyle button "background-color" color)
                    (aset button "color" color))) 100))))))

   :components
    [{:tag "form" :name "form" :style "padding:0;" :attributes {:enctype "multipart/form-data" :method "POST" :action (str const/-file-addr- "avatar-upload")} :components [{:tag "div" :content "Avatar Image:" :style "margin-top:9px;margin-left:7px"} {:tag "input" :style "pading:0;margin:0 0 0 7px;" :attributes {:name "avatarimage" :type "file" :size 10}} {:tag "input" :attributes {:type "hidden" :name "username" :value "jeremy" :class "username"}}]}
     {:kind "onyx.InputDecorator" :style "margin:16px 7px 0px 7px;padding:10px;width:380px;display:block;":components [{:kind "enyo.Input" :name "usernameInput" :attributes {:name "username"} :placeholder "Enter a Username"}]}
     {:kind "onyx.Button" :name "usernameBackgroundColorBtn" :avatarKey "name-bg-color" :content "Username Background Color" :style "margin:7px;display:block;width:400px;" :ontap "evt-color-btn-tap"}
     {:kind "onyx.Button" :name "usernameTextColorBtn" :avatarKey "name-text-color" :content "Username Text Color"       :style "margin:7px;display:block;width:400px;" :ontap "evt-color-btn-tap"}
     {:kind "onyx.Button" :name "balloonBackgroundColorBtn" :avatarKey "balloon-bg-color" :content "Balloon Background Color"  :style "margin:7px;display:block;width:400px;" :ontap "evt-color-btn-tap"}
     {:kind "onyx.Button" :name "balloonTextColorBtn"  :avatarKey "balloon-text-color" :content "Balloon Text Color"        :style "margin:7px;display:block;width:400px;" :ontap "evt-color-btn-tap"}
     {:tag "div" :style "text-align:center" :components
       [{:tag "span" :allowHtml true :style "display:inline-block;" :components
         [{:kind "onyx.Button" :content "Ok" :style "width:193px;margin:7px" :ontap "evt-ok-clicked"} {:kind "onyx.Button" :content "Cancel" :style "width:193px;margin:7px" :ontap "evt-cancel-clicked"}]}]}
     {:kind "onyx.Popup" :name "colorPopup" :autoDismiss false :centered true :floating true :modal true :style "width:300px;z-index:16000005;" :components  
      [{:kind "ColorPicker" :onColorPick "evt-color-pick"}]}]

   :create
    (fn [] 
      (this-as this 
        (m/->. inherited this (js* "arguments"))))

   :evt-on-close-requested
     (fn [sender e]
       (this-as this
          (m/->. doOnCloseRequeseted e)))

   :evt-color-pick
    (fn [sender color]
      (this-as this
        (let [color-pop (m/->.- colorPopup (m/->.- $ this))
              btn (aget color-pop "for-btn")
              color (m/->.- color sender)]
          (m/->. applyStyle btn "background-color" color)
          (aset btn "color" color)
          (m/->. hide color-pop))))

   :evt-cancel-clicked
    (fn [sender e]
      (this-as this
        (m/->. bubble this "onCloseRequested")))
   :evt-ok-clicked
    (fn [sender e]
      (this-as this
        (let [get-color 
                (fn [btn]
                  {(keyword (m/->.- avatarKey btn)) (m/->.- color btn)})
                    av (merge (m/->. getAvatar this)
                            {:username (m/->.- value (m/->. hasNode (m/enyo-$ "usernameInput")))}
                            (get-color (m/enyo-$ "usernameBackgroundColorBtn"))
                            (get-color (m/enyo-$ "usernameTextColorBtn"      ))
                            (get-color (m/enyo-$ "balloonBackgroundColorBtn" ))
                            (get-color (m/enyo-$ "balloonTextColorBtn"       )))]
                   (avatar/update-user-avatar av))
        ;; LOOK HERE
        (let [iframeio (goog.net.IframeIo.)
              form     (m/->. hasNode (m/->.- form (m/->.- $ this)))
              username (dom/getElementByClass "username" form)]
          (.setAttribute username "value" @avatar/-uuid-)
          (.sendFromForm iframeio form))
        (m/->. bubble this "onCloseRequested")))
        
   :evt-color-btn-tap 
    (fn [sender e]
      (this-as this
        (let [color-pop (m/->.- colorPopup (m/->.- $ this))]
          (aset color-pop "for-btn" sender) 
          (m/->. show color-pop))))})


(m/enyo-kind
  {:name    "YesNoDialog"
   :kind    "onyx.Popup"
   :classes "onyx"
   :floating true
   :centered true
   :style    "position:fixed;padding:25px;z-index:16000005;"

   :published 
    {:message "Example Message"
     :title   "Example Title"
     :positiveLabel  "Yes"
     :negativeLabel  "No" 
     :positiveCallback nil}

   :positiveLabelChanged (make-content-modifier "posBtn"    "positiveLabel")
   :negativeLabelChanged (make-content-modifier "negBtn"    "negativeLabel")
   :messageChanged       (make-content-modifier "mesgComp"  "message"      )
   :titleChanged         (make-content-modifier "titleComp" "title"        )
   
   :evt-yes-tapped
      (fn [sender e]
        (this-as this
          (if (aget this "positiveCallback")
            ((aget this  "positiveCallback")))
          (m/->. hide this)))

   :evt-no-tapped
      (fn [sender e]
        (this-as this
          (m/->. hide this)))

   :components 
      [{:name "titleComp"  :content "Example Title"   :style "font-size:22px;margin-bottom:10px;margin-top:9px"} 
       {:name "mesgComp"   :content "Example Message" :style "font-size:15px;margin-bottom:15px;"}
       {:tag "div" :style "text-align:center" :components
        [{:tag "span" :allowHtml true :style "display:inline-block;" :components
          [{:name "posBtn" :kind "onyx.Button" :content "Yes" :style "margin:10px" :ontap "evt-yes-tapped"}
           {:name "negBtn" :kind "onyx.Button" :content "No"  :style "margin:10px" :ontap "evt-no-tapped" }]}]}]})

(defn yes-no-dialog
  [title mesg yes-cb]
  (let [control (YesNoDialog.)]
    (m/->. setTitle   control title)
    (m/->. setMessage control mesg)
    (m/->. setPositiveCallback control yes-cb)
    (m/->. show control)))

(m/enyo-kind
  {:name "AvatarDesignPopup"
   :kind "onyx.Popup"
   :classes "onyx"
   :floating true
   :style "position:fixed;top:5%;right:2.5%;z-index:16000005;"
   :autoDismiss false 

   :handlers 
    {:onCloseRequested "evt-on-close-requested"}

   :setAvatar 
    (fn [avatar] (this-as this (m/->. setAvatar (m/enyo-$ "mainWindow") avatar)))
   
   :evt-on-close-requested
    (fn [sender e]
      (this-as this
        (events/signal-overlay-changed {:visible false})
        (m/->. hide this)))

   :components 
    [{:name "mainWindow" :kind "MainWindow"}]})
