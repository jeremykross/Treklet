(ns treklet-homepage.core
  (:gen-class)
  (:use [hiccup core page-helpers])
  (:require [cssgen :as css]))

(defn main-css []
  (spit "css/main.css"
    (css/css 
      [:body
       :background-color :black]
      [:.content
       :margin-left  :auto
       :margin-right :auto]
      [:.terminal-text
       :color :#00FEE3
       :font-family "cursive"
       :font-size "18px"
       :line-height "50px"]
      ["#marker, .marker"
       :background-color :#00FEE3
       :width "25px"
       :height "50px"
       :float :left]
      [:.marker.decay
       :position :absolute]
      [:#current-line
       :z-index 10000
       :position :relative]
      ["#current-line span"
       :float :left]
      ["#history, .history"
       :position :fixed
       :bottom "100px"]
      [:#scanlines
       :z-index 100
       :position :fixed
       :top 0
       :left 0
       :width "100%"
       :height "100%"
       :opacity ".25"
       :pointer-events :none
       :background-size "32px 128px"
       :background-image "url('../images/scanlines.png')"])))

(defn host-html []
  (spit "host.html"
    (html
      [:head
       (include-css "http://fonts.googleapis.com/css?family=Press+Start+2P")
       (include-css "css/main.css")
       (include-js  "treklet-home.js")]
      [:body
       [:div#scanlines]
       [:div#history.history.terminal-text
        [:div#current-line
         [:span][:div#marker.marker]]]
        [:script
          "treklet_homepage.core.main();"]])))

(defn -main [& args]
  (main-css)
  (host-html))
