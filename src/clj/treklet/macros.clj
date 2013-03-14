(ns treklet.macros
  (:require [clojure.string :as strings]
            [clojure.walk :as walk]))

;*CLJSBUILD-MACRO-FILE*;

(defmacro native-call
  ([js-objects & form]
  (letfn [(is-func-call [symbl]
            (let [symbl (str symbl)]
              (and (.startsWith symbl ".") 
                   (not (.startsWith symbl ".-")))))
          (is-prop-access [symbl]
            (.startsWith (str symbl) ".-"))
          (call-to-str [symbl]
            (.replaceAll (str symbl) "^\\.\\-?" ""))
          (is-js [object] (some #{object} js-objects))
          (to-native [form]
            (if (and (list? form) (>= (count form) 2))
              (let [[field object & others] form
                    access `(aget ~object ~(call-to-str field))]
                (cond 
                  (and (is-func-call field) (is-js object))  
                    `(.call ~access ~object ~@others)
                  (and (is-prop-access field) (is-js object))
                    `~access
                  :else form))
              form))]
    `(do ~@(walk/prewalk to-native form)))))

(defmacro let-native
  [bindings & body]
  `(let ~bindings 
     (native-call ~(into [] (take-nth 2 bindings))
      ~@body)))

(defmacro enyo-method
  [args & body]
  (let [[self & others] args]
  `(fn ~(into [] others)
     (clojure.core/this-as ~self
      (native-call [js/enyo js/onyx ~self (.-$ ~self)]
        ~@body )))))

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
