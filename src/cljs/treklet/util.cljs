(ns treklet.util
  (:require [goog.style :as style]
            [goog.dom :as dom]
            [clojure.string :as string]))

(defn append-html-frag
  [html-fragment]
  (let [elem (dom/htmlToDocumentFragment html-fragment)]
    (dom/append document.body elem)
    elem))

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

(defn starts-with
  [string substr]
  (zero? (.indexOf string substr)))

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

(defn get-path
  ([a-map path] (get-path a-map path nil))
  ([a-map path not-found]
  (loop [element a-map
         path    (map keyword (string/split path #"\."))]
    (let [cur-key   (first path)
          remaining (rest  path)
          cur-elem  (element cur-key)]
      (if (zero? (count remaining))
        cur-elem
        (if (not (map? cur-elem))
          not-found
          (recur cur-elem remaining)))))))

(defn set-path
  [a-map path value]
  (loop [element value
         reverse-keys (reverse (string/split path #"\."))]
    (let [cur-key   (keyword (first reverse-keys))
          remaining (rest  reverse-keys) 
          path-to-remaining (string/join "." (reverse remaining))
          currently (get-path a-map path-to-remaining)
          currently (if (associative? currently) currently {})
          cur-elem  (assoc currently cur-key element)]
      (if (zero? (count remaining))
        (merge a-map cur-elem) ;is that right, wtf?
        (recur cur-elem remaining)))))
           
(defn state-bind
  [state path cb]
  (let [binding-fn 
        (fn [cb state old-val new-val]
          (let [old-val (get-path old-val path)
                new-val (get-path new-val path)] 
            (if (not= old-val new-val)
              (cb old-val new-val))))]
    (add-watch state cb binding-fn)
    (binding-fn cb state {} @state)
    cb))
(defn bind-to
  [state path path])
(defn dynamic-call
  [a-kind method-name & args]
  (.apply (aget a-kind method-name) a-kind (clj->js args)))

(defn no-op [& args])

(defn index-of
  [a-seq x]
  ((zipmap a-seq (range (count a-seq))) x))
