(ns treklet.core
  (:gen-class)
  (:use [hiccup core page-helpers])
  (:require [treklet.avatar :as avatar] 
            [treklet.util :as util ]
            [cssgen         :as css]))

(defn ^:speech-input-css speech-input-css
  []
  (css/css-file "css/speechinput.css"
    (css/rule   "input#treklet-speech-input"
              :z-index "1003"
              :position "fixed"
              :bottom "5px" 
              :left "12.5%"
              :width    "75%")))

(defn main-css
  []
  (css/css-file "css/main.css"
    (css/rule "treklet-root"
              :position "absolute"
              :width    "100%"
              :height   "100%"
              :min-height "100%"
              :top "0px"
              :left "0px"))) 

(defn host-advanced-html []
  (spit "host-advanced.html"
  (html
    [:head
     (include-css "css/common.css") 
     (include-css "css/dialog.css") 
     (include-css "css/button.css") 
     (include-css "css/menubutton.css") 
     (include-css "css/colormenubutton.css") 
     (include-css "css/custombutton.css") 
     (include-css "css/colorpicker-simplegrid.css") 
     (include-css "css/main.css") 
     (include-css "css/avatar.css")
     (include-css "css/avatar-anim.css")
     (include-css "css/speechinput.css")
     (include-js  "http://127.0.0.1:8081/socket.io/socket.io.js")
     (include-js  "http://localhost:8080/caja.js")

     (include-css "enyo/enyo-2.0b4/enyo.css")
     (include-js  "enyo/enyo-2.0b4/enyo.js" )
     (include-js  "package.js")]

    [:body {:style "background-color:cornflowerblue;"} 
     [:script
      "treklet.core.main();"]])))
  
(defn bookmarklet-html-1 []
  (spit "bookmarklet.html"
    (html
      [:head]
      [:body
       [:a {:href 
            "javascript:(function(){function%20getScript(url,success){var%20script=document.createElement('script');script.src=url;var%20head=document.getElementsByTagName('head')[0],done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=='loaded'||this.readyState=='complete')){done=true;success();script.onload=script.onreadystatechange=null;head.removeChild(script);}};head.appendChild(script);}function%20getCSS(url){alert('Got%20CSS%20'+url);var%20s=document.createElement('link');s.setAttribute('href',url);s.setAttribute('rel','stylesheet');s.setAttribute('type','text/css');document.getElementsByTagName('head')[0].appendChild(s);}getScript('http://127.0.0.1:8081/socket.io/socket.io.js',function(){getScript('treklet.js',function(){goog.require('treklet.core');treklet.core.main();});});getCSS('css/avatar.css');getCSS('css/avatar-anim.css');getCSS('css/speechinput.css');})();"
            } 
        "Treklet"]])))

(defn host-html []
  (spit "host.html"
  (html
    [:head
     (include-css "css/common.css") 
     (include-css "css/dialog.css") 
     (include-css "css/button.css") 
     (include-css "css/menubutton.css") 
     (include-css "css/colormenubutton.css") 
     (include-css "css/custombutton.css") 
     (include-css "css/colorpicker-simplegrid.css") 
     (include-css "css/main.css")
     (include-css "css/avatar.css")
     (include-css "css/avatar-anim.css")
     (include-css "css/speechinput.css")
     (include-js  "http://127.0.0.1:8081/socket.io/socket.io.js")]
    [:body
     (include-js "out/goog/base.js" 
                 "treklet.js")
     [:script 
      "goog.require('treklet.core');"]
     [:script
      "treklet.core.main();"]])))
  
(defn -main 
  [& args]
  (host-html)
  ;(bookmarklet-html)
  (bookmarklet-html-1)
  (avatar/avatar-css)
  (speech-input-css)
  (main-css))
