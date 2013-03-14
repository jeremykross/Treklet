(ns treklet.util
  (:require [goog.style :as style]
            [goog.dom :as dom]))

(defn append-html-frag
  [html-fragment]
  (let [elem (dom/htmlToDocumentFragment html-fragment)]
    (dom/append document.body elem)
    elem))

(defn js->clj
  [x]
  (js->clj x :keywordize-keys true))

(defn clj->js
  "Recursively transforms ClojureScript maps into Javascript objects,
  other ClojureScript colls into JavaScript arrays, and ClojureScript
  keywords into JavaScript strings."
  [x]
  (cond
    (string? x)  x
    (keyword? x) (name x)
    (map? x) (.-strobj (reduce (fn [m [k v]]
                                (assoc m (clj->js k) (clj->js v))) {} x))
    (coll? x) (apply array (map clj->js x))
    :else x))

(defn identity-remove
  [a-seq an-object]
  (remove #(identical? % an-object) a-seq))

(defn atom-set!
  [the-atom value]
  (compare-and-set! the-atom @the-atom value))

(defn position-center
  [element x y]
  (let [size        (style/getSize element)
        half-width  (/ (.-width size) 2)
        half-height (/ (.-height size) 2)]
    (style/setPosition element (- x half-width) (- y half-height))))

(defn ellipsize
  [string size]
  (if (> (.-length string) size)
    (str (.slice string 0 size) "...")
    string))
(defn capitalize
  [string]
  (str (.toUpperCase (.charAt string 0)) (.slice string 1)))

(defn str-contains
  [string substring]
  (not= (.indexOf string substring) -1))

(defn make-counter 
  ([] (make-counter 0))
  ([initial-value]
  (let [counts (atom {})]
    (fn cnter 
      ([id] (@counts id))
      ([modifier id] (cnter modifier id 1))
      ([modifier id & args]
       (if (not (contains? @counts id))
         (swap! counts assoc id initial-value))
       (swap!   counts assoc id (apply modifier (@counts id) args))
       (@counts id))))))
