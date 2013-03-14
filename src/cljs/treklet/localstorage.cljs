(ns treklet.localstorage
  (:require [treklet.util :as util]
            [treklet.constants :as const]
            [goog.net.xpc :as xpc]
            [goog.net.xpc.CrossPageChannel :as cpc]
            [goog.style   :as style]
            [goog.json    :as json]))

  ;(.setItem (js* "localStorage") (str *namespace* "_" k) (json/serialize (util/clj->js v))))
  ;(js->clj (json/parse (.getItem (js* "localStorage") (str *namespace* "_" k) )) :keywordize-keys true))

(def *namespace* "treklet")
(def -parent-channel-     nil )
(def -waiting-callbacks- (atom {}))

(defn init
  [callback]
  (def -parent-channel-
    (xpc/CrossPageChannel. (util/clj->js { (.-PEER_URI xpc/CfgFields) (str const/-file-addr- "localstorage.html") })))
  (.createPeerIframe -parent-channel- (.-body js/document) 
    (fn [iframe] (style/setStyle iframe "display" "none")))
  (.connect -parent-channel-
    (fn []
      (.registerService -parent-channel- "ack"
        (fn []
          (callback))))))

(defn write
  ([k v] (write k v nil))
  ([k v callback]
    (.send -parent-channel- "write" (json/serialize (util/clj->js {:k k :v v})))
    (.registerService -parent-channel- "on-write-complete"
      (fn [] (if callback (callback))))))

(defn read
  [k callback]
  (.registerService -parent-channel- "on-read-complete"
    (fn [data]
      (let [result (js->clj (json/parse data) :keywordize-keys true)]
        (callback result))))
  (.send -parent-channel- "read" (json/serialize (util/clj->js {:k k}))))

(defn clear
  [callback]
  (.send -parent-channel- "clear")
  (.registerService -parent-channel- "on-clear-complete"
    (fn [] (callback))))

(comment (defn has
  [k]
  (not (nil? (read k)))))


(defn modify-plugin
  [plugin-name plugin-map]
  (read "plugins"
    (fn [plugins]
      (let [plugins (if plugins plugins {})
            plugin-name (keyword (str (hash plugin-name)))
            modified-plugins (assoc plugins plugin-name
                               (merge (plugins plugin-name) plugin-map))]
        (write "plugins" modified-plugins)))))

(defn remove-plugin
  [plugin-name]
  (read "plugins"
    (fn [plugins]
      (let [plugins (if plugins plugins {})
            plugin-name (str (hash plugin-name))]
        (write "plugins" (dissoc plugins (keyword plugin-name)))))))

(defn add-plugin
  [plugin-name href]
  (modify-plugin href {:href href :name plugin-name }))
