(ns treklet.gui.kinds.avatar
  (:require [treklet.gui.enyo :as enyo]
            [treklet.gui.state :as state]
            [treklet.util :as u]
            [treklet.constants :as const]
            [treklet.avatar :as avatar]
            [goog.net.XhrIo :as xhr])
  (:require-macros [treklet.macros :as m]))

(def -state- state/-reference-)
(swap! -state- merge {:avatar-design {:balloon-bg-color "transparent"
                                      :balloon-fg-color "transparent"
                                      :name-bg-color    "transparent"
                                      :name-fg-color    "transparent"
                                      :username         ""}})

(def -centered- "-webkit-box-sizing:border-box;box-sizing:border-box;-moz-box-sizing:border-box;display:block;width:85%;margin:10px auto 10px auto !important;padding-left:10px;padding-right:10px;")

(def -bottom-button- "width:40%;margin:10px;display:inline-block;")

(enyo/kind
  {:name "treklet_js.gui.kinds.AvatarDesign"
   :kind  "enyo.Control"
   :classes "onyx treklet_avatar-design"

   :published 
    {:avatar nil}

   :avatarChanged
    (m/enyo-method
      [self]
      (let [avatar           (.getAvatar self)
            username-input   (.-usernameInput (.-$ self))
            balloon-bg-btn   (.-balloonBgColorButton (.-$ self))
            balloon-text-btn (.-balloonTextColorButton (.-$ self))
            name-bg-btn      (.-usernameBgColorButton (.-$ self))
            name-text-btn    (.-usernameTextColorButton (.-$ self))
            img              (.-image (.-$ self))]
        (when avatar
          (.setAttribute img "src" (str const/-file-addr- "images/" (avatar :uuid) ".png"))
          (.setValue username-input (avatar :username))
          (.applyStyle balloon-bg-btn "background-color" (avatar :balloon-bg-color))
          (.applyStyle balloon-text-btn "background-color" (avatar :balloon-text-color))
          (.applyStyle name-bg-btn "background-color" (avatar :name-bg-color))
          (.applyStyle name-text-btn "background-color" (avatar :name-text-color)))))
    
   :colorButtonTapped
   (m/enyo-method
     [self sender evt]
     (let [color-popup (.-colorPopup (.-$ self))]
       (aset color-popup "forButton" sender)
       (.show color-popup)))

   :colorPicked
    (m/enyo-method
      [self sender evt]
      (let [color-popup (.-colorPopup (.-$ self))
            btn (aget color-popup "forButton")]
        (.applyStyle btn "background-color" (aget sender "color"))
        (.hide color-popup)))

   :avatarImageTapped
    (m/enyo-method
      [self]
      (let [image-popup (.-imagePopup (.-$ self))]
        (.show image-popup)))

   :uploadAvatarImage
    (m/enyo-method
      [self]
      (let [form (new js/FormData)
            file (aget (.getFiles (.-fileInput (.-$ self))) 0)
            xhr  (js/XMLHttpRequest.)]
        (when file
          (.append form "username" @avatar/-uuid-)
          (.append form "avatarimage" file)
          (.open xhr "POST" (str const/-file-addr- "avatar-upload"))
          (.send xhr form)
          (set! (.-onreadystatechange xhr)
            (js/setTimeout
            (fn [] (.setAttribute (.-image (.-$ self)) "src" (str const/-file-addr- "images/" (@avatar/-local-avatar- :uuid) ".png"))) 1000))
          (.avatarImageDismissed self))))

   :avatarImageDismissed
    (m/enyo-method
      [self]
      (let [image-popup (.-imagePopup (.-$ self))]
        (.hide image-popup)))
   :getColor
    (m/enyo-method
      [self btn]
      (.getComputedStyleValue (aget (.-$ self) btn) "background-color"))
      
   :updateAvatar
    (m/enyo-method
      [self]
      (avatar/update-user-avatar (merge (.getAvatar self)
             {:username (.getValue (.-usernameInput (.-$ self)))
              :balloon-bg-color (.getColor self "balloonBgColorButton")
              :balloon-text-color (.getColor self "balloonTextColorButton")
              :name-bg-color (.getColor self "usernameBgColorButton")
              :name-text-color (.getColor self "usernameTextColorButton")})))

   :create
    (m/enyo-method
      [self]
      (.inherited self js/arguments)
      (.setAvatar self @avatar/-local-avatar-))


   :components 
    [{:kind "onyx.Popup" :forButton nil :name "colorPopup" :autoDismiss true :centered true :floating true :modal true :style "z-index:16000007 !important;width:300px;"
      :components
        [{:kind "ColorPicker" :onColorPick "colorPicked"}]}

     {:kind "onyx.Popup" :name "imagePopup" :centered true :floating true :modal true :style "padding:10px;width 300px;z-index:16000007 !important;" 
      :components
        [{:kind "jmtk.FileInput" :name "fileInput" :uploadNote "Please select an image file."}
         {:kind "onyx.Button" :ontap "uploadAvatarImage" :style "display:inline-block;width:48%;margin:2px;" :content "Upload"}
         {:kind "onyx.Button" :ontap "avatarImageDismissed" :style "display:inline-block;width:48%;margin:2px;" :content "Cancel"}]}
     
     {:tag "img"
      :classes "treklet_avatar-design-image"
      :ontap "avatarImageTapped"
      :name "image"} 

     {:kind "onyx.InputDecorator"
      :classes "username-input"
      :components
        [{:kind "enyo.Input" :name "usernameInput" :placeholder "Enter a Username"}]}

     {:kind "onyx.Button" :name "usernameBgColorButton" :ontap "colorButtonTapped" :style -centered- :content "Username Background Color"}
     {:kind "onyx.Button" :name "usernameTextColorButton" :ontap "colorButtonTapped" :style -centered- :content "Username Background Color"}
     {:kind "onyx.Button" :name "balloonBgColorButton" :ontap "colorButtonTapped" :style -centered- :content "Username Background Color"}
     {:kind "onyx.Button" :name "balloonTextColorButton" :ontap "colorButtonTapped" :style -centered- :content "Username Background Color"}]})
