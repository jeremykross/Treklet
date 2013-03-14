(ns treklet-homepage.core
  (:require [treklet.util :as util] 
            [clojure.string :as string]
            [goog.dom :as dom]
            [goog.userAgent :as useragent]
            [goog.dom.dataset :as dataset]
            [goog.dom.classes :as classes]
            [goog.fx.dom :as fx-dom]
            [goog.style :as style]))

(def -url- "http://174.143.169.193:8082")
(def -text-
  ["Welcome to Trek!"
   {:pause 100}
   "Welcome to Treklet!"])

(defn px-to-int 
  [px]
  (js/parseInt (.replace px "px" "")))

(defn int-to-px
  [integer-list]
  (string/join " " (map #(str % "px") integer-list)))

(defn scan-verb-lines 
  []
  (let [elem   (dom/getElement "scanlines")
        bg-pos (px-to-int (second (string/split (style/getStyle elem "background-position") " ")))]
    (style/setStyle elem "background-position" (int-to-px [0 (- bg-pos 19190)]))))

(defn decay
  ([elem] (decay elem {:x js/undefined :y js/undefined}))
  ([elem position]
  (let [clone  (.cloneNode elem true)
        parent (.-parentNode elem )
        fade   (fx-dom/FadeOutAndHide. clone 1000)
        id     (.getAttribute elem "id")]
    (.removeAttribute clone "id")
    (classes/add clone "decay")
    (style/setPosition clone (- (position :x) 5) (position :y))
    (dom/append parent clone)
    (.play fade))))

(defn advance
  []
  (let [history      (dom/getElement "history")
        current-line (dom/getElement "current-line")
        current-text (.-innerHTML (dom/getFirstElementChild current-line))]
    (decay history)
    (dom/insertSiblingBefore (dom/createDom "div" nil (dom/htmlToDocumentFragment current-text)) current-line)))


(defn marker-left
  []
  (dom/getPageOffsetLeft (dom/getElement "marker")))


(defn set-current-line
  [txt]
  (comment (let [marker (dom/getElement "marker")
        pos    (style/getPosition marker)]
    (decay marker {:x (.-x pos) :y (.-y pos)})))
  (let [line (dom/getFirstElementChild (dom/getElement "current-line"))]
    (dom/removeChildren line) 
    (dom/appendChild line (dom/htmlToDocumentFragment txt))))

(defn advance-line
  [txt]
  (advance)
  (set-current-line txt))

(defn type-at
  ([mesg] 
   (type-at mesg nil))
  ([mesg cb]
   (type-at mesg 25 100 cb))
  ([mesg speed cb]
   (type-at mesg speed 100 cb))
  ([mesg speed variance cb]
  (let [mesg   (string/replace mesg " " " ")
        update (fn me [i]
                 (let [i (if (= (.charAt mesg i) "<")
                           (+ (.indexOf (.substring mesg i) ">") i 1)
                         (if (= (.charAt mesg i) "&")
                           (+ i 5)
                           i))]
                   (set-current-line (.substring mesg 0 i))
                   (if (< i (.-length mesg))
                     (js/setTimeout #(me (inc i)) (+ speed (rand-int variance)))
                     (if cb (cb)))))
        run (fn [] (advance) (update 0))]
    run)))

(defn prompt-proper-browser
  [cb]
  (cond
    useragent/WEBKIT (type-at (str "1. Use it! To install in Chrome click <a href='" -url- "treklet.user.js'> here</a>.")  cb)
    useragent/GECKO  (type-at "1. Use it! To install in Firefox get <a> Greasemonkey </a> and click here." cb)
    :else            (type-at "1. Please use Chrome or Firefox to install in your browser.")))

(defn onTrekletStarted
  []
  (js/setTimeout 
  (type-at "Treklet is a new way to experience the web."
  (type-at "It lets you meet and interact with users on the same web page as you."
  (type-at "Every user is represented by a graphical avatar on the page."
  (type-at "You can move your avatar simply by clicking, try that now."
  #(js/treklet.events.slot_user_repositioned
     (fn me [username x y] 
       (when (= username (js/treklet.core.localUuid))  
         (js/treklet.events.unslot_user_repositioned me)
         ((type-at "You can chat by typing a message in the bar at the bottom, please do!"
          (fn [] (js/treklet.events.slot_avatar_spoke
             (fn me [username phrase]
              (when (= username (js/treklet.core.localUuid))  
               (js/treklet.events.unslot_avatar_spoke me)
               ((type-at (str "Well, " phrase " to you too.")
                (type-at "You can double click your avatar to customize its appearance."
                  (fn [] (js/treklet.events.slot_overlay_changed
                    (fn me [evt]
                      (js/treklet.events.unslot_overlay_changed me)
                      ((type-at "Please customize your avatar."
                        (fn [] (js/treklet.events.slot_avatar_changed
                          (fn [avatar]
                           ((type-at "Hey, looks good."
                           (type-at "Treklet has a plugin system for developers."
                           (type-at (str "Please run our demo plugin (Pet-Fighter) by clicking here.")
                            ;(fn [] 
                            ;  (js/treklet.service.catalogueLinks)
                            ;  (js/treklet.events.slot_plugin_run 
                            ;    (fn me [plugin-name href]
                            ;      (js/treklet.events.unslot_plugin_run me)
                            ;      ((type-at "Aww, isn't he cute."
                            ;       (type-at "Try moving around a little..."
                            ;        (fn [] (js/treklet.events.slot_user_repositioned
                            ;          (fn me [username x y] 
                            ;            (when (= username (js/treklet.core.localUuid))  
                            ;            (js/treklet.events.unslot_user_repositioned me)
                                   (type-at "Sorry, Plugins Coming Again Soon."
                                   (type-at "Anyway, if you like what you see, there're lot of ways to help."
                                   (prompt-proper-browser
                                   (type-at "2. Write some code? (git-hub)"
                                   (type-at "3. If so moved? (kickstarter)"    
                                   (type-at "Programmed by Jeremy Kross" 
                                   (type-at "Pet-Fighter sprites by Brett Kirschner")))))))))))))))))))))))))))))))))))
                              1000 ))

(.exportSymbol js/goog "onTrekletStarted" onTrekletStarted)

(defn ^:export main
  []
  (let [elem (dom/getElement "scanlines")]
    (style/setStyle elem "background-position" "0px 0px"))
  (js/setInterval scan-verb-lines 75)

  ((type-at "Welcome to Treklet!"
    (type-at "Click <a href=\"javascript:(function() {function getScript(url,success) {var script=document.createElement('script');script.src=url;var head=document.getElementsByTagName('head')[0], done=false;script.onload=script.onreadystatechange = function(){if ( !done && (!this.readyState|| this.readyState == 'loaded'|| this.readyState == 'complete') ) {done=true;success();script.onload = script.onreadystatechange = null;head.removeChild(script);}};head.appendChild(script);}function getCSS(url) {var s = document.createElement('link');s.setAttribute('href', url);s.setAttribute('rel', 'stylesheet');s.setAttribute('type', 'text/css');document.getElementsByTagName('head')[0].appendChild(s);}getCSS('http://174.143.169.193:8082/css/treklet.css');getScript('http://174.143.169.193:8081/socket.io/socket.io.js', function() { getScript('http://174.143.169.193:8082/external.js', function() { getScript('http://174.143.169.193:8082/treklet.js', function() {});});});})();\">here</a> to start, okay?"))))
      
(js/setTimeout (fn [] (main)) 1000)
