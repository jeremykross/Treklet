(ns treklet.macros
  (:require [clojure.string :as strings]))

;*CLJSBUILD-MACRO-FILE*;

(defmacro js-ns
  [&args])

(defmacro enyo-$
  [a-name]
  `(aget (aget ~'this "$") ~a-name))

(defmacro ->.
  [method object & args]
  `(.call (aget ~object ~(str method)) ~object ~@args))

(defmacro ->.-
  [property object]
  `(aget ~object ~(str property)))

(defmacro enyo-kind
  [a-map] 
  (let [a-name (a-map :name)]
    `(do
       (enyo/kind (util/clj->js ~a-map))
       (def ~(symbol a-name) (~(symbol 'js*) ~a-name)))))

(defmacro caja-defn
  [fn-name args & body]
  `(do 
     (defn ~fn-name ~args
       ~@body)
     (.markFunction js/caja ~fn-name)
     (def ~(symbol (str "tame-" fn-name)) (.tame js/caja ~fn-name))))

(defmacro make-event 
  [event-name & others]
  (let [signal-event (symbol (str "signal-" event-name))
        slot-event   (symbol (str "slot-" event-name))
        undo-slot    (symbol (str "unslot-" event-name))]
  `(let [subscribers# (atom [])]
     (defn ~signal-event
       [& args#]
       (doseq [s# @subscribers#] (apply s# args#)))
     (defn ~slot-event
       [listener#]
       (swap! subscribers# conj listener#))
     (defn ~undo-slot
       [listener#]
       (swap! subscribers# #(remove #{%2} %1) listener#))
     ~(let [others (apply hash-map others)
            global-ns (fn [x]
                        (strings/replace (str (others :global-ns) "." x "_" event-name) "-" "_"))]
        (when (others :global-ns)
          `(do
            (.exportSymbol js/goog ~(global-ns "signal")    ~signal-event)
            (.exportSymbol js/goog ~(global-ns "slot")      ~slot-event)
            (.exportSymbol js/goog ~(global-ns "unslot")    ~undo-slot)))))))
