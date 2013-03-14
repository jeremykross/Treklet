(ns treklet.avatar
  (:require [cssgen :as css]
            [treklet.util :as util]))


(defn avatar-anim-css []
  (css/css-file "css/avatar-anim.css"
    (css/rule "@-webkit-keyframes anim-wither"
      (css/rule "0%"
        :opacity "1")
      (css/rule "100%"
        :opacity "0"
        :-webkit-transform "translate(-5,-5)"))
    (css/rule "@-webkit-keyframes anim-pop"
      (css/rule "0%"
        :opacity "0"
        :-webkit-transform "scale(0,0)")
      (css/rule "100%"
        :opacity "1"
        :-webkit-transform "scale(1,1)"))))

(defn avatar-css []
    (css/css-file "css/avatar.css"
    (css/rule ".locale-changed-notice"
              :padding "20px" 
              :background-color "yellow"
              :border "1px solid orange"
              :color "black"
              :opacity ".75"
              :position "absolute"
              :z-index "1002"
              :-webkit-transition "opacity .450s ease-in-out" 
              :-webkit-box-shadow "0px 0px 10px grey")
    (css/rule ".anim-entrance"
                :-webkit-animation-name "anim-entrance"
                :-webkit-animation-duration ".4s"
                :-webkit-animation-timing-function "ease-in-out" )
    (css/rule ".anim-exit"
                :-webkit-animation-name "anim-exit"
                :-webkit-animation-duration ".450s"
                :-webkit-animation-timing-function "ease-in-out")
    (css/rule ".anim-notify"
                :-webkit-animation-name "anim-notify"
                :-webkit-animation-duration ".450s"
                :-webkit-animation-timing-function "ease-in-out")
    (css/rule ".anim-hide"
                :-webkit-animation-name "anim-hide"
                :-webkit-animation-duration ".25s"
                :-webkit-animation-timing-function "ease-in-out")
    (css/rule ".anim-show"
                :-webkit-animation-name "anim-show"
                :-webkit-animation-duration ".25s"
                :-webkit-animation-timing-function "ease-in")
    (css/rule   "div#treklet-avatar-pane"
                :z-index "-10000"
                :position "absolute"
                :width "100%"
                :height "100%"
                :min-height "100%"
                :top "0px"
                :left "0px")

    (css/rule   "div.avatar"
      :position "absolute"
      :font-family "Monaco"
      :top      "40.45px"
      :left     "25px"
      :overflow "visible"
      :z-index "1000"
      :-webkit-transition "top .5s cubic-bezier(0.215, 0.610, 0.355, 1.000), left .5s cubic-bezier(0.215, 0.610, 0.355, 1.000)"
      (css/rule "img"
                   :width  "64px"
                   :height "64px"
                   :display "block"
                   :margin-left "auto"
                   :margin-right "auto"
                   :border-radius "4px"
                   :-webkit-box-shadow "3px 3px 3px grey")
      (css/rule "span.avatar-name"
                   :margin-top "5px"
                   :padding "2px"
                   :color "white" 
                   :background-color "cornflowerblue"
                   :text-align "center"
                   :-webkit-box-shadow "2px 2px 3px grey"
                   :white-space "nowrap"
                   :border-radius "2px"
                   :display "block")
      (css/rule "div.avatar-balloon"
                :background-color "red"
                :padding  "10px"
                :top "-40px"
                :left "0px"
                :width "200px"
                :-webkit-box-shadow "7px 7px 10px grey"
                :border-radius "4px"
                :opacity 0
                :z-index "1001"
                :overflow "hidden"
                :position "absolute")
      (css/rule "div.avatar-balloon.anim-pop"
                :-webkit-animation-name "anim-pop"
                :-webkit-animation-duration ".4s"
                :-webkit-animation-timing-function "linear") 
      (css/rule "div.avatar-balloon.anim-wither"
                :-webkit-animation-name "anim-wither"
                :-webkit-animation-duration "1s"
                :-webkit-animation-timing-function "cubic-bezier(0.215, 0.610, 0.355, 1.000)"))))

