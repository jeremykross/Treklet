(ns treklet.util
  (:require [cssgen :as css]))

(def -vendors- ["-webkit-" "-moz-"])

(defn vendor-prefix
  [prop value]
  (letfn [(prefix [vendor prop value]
            (list (keyword (str vendor prop)) value))]))
    
(defmacro make-event 
  [event-name]
  `(let [subscribers# (atom [])]
     (defn ~(symbol (str "signal-" event-name))  
       [& args#]
       (doseq [s# @subscribers#] (apply s# args#)))
     (defn ~(symbol (str "slot-connect-" event-name))
       [listener#]
       (swap! subscribers# conj listener#))
     (defn ~(symbol (str "slot-disconnect-" event-name))
       [listener#]
       (swap! subscribers# #(remove #{%2} %1) listener#))))

