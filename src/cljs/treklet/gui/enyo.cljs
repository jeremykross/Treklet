(ns treklet.gui.enyo
  (:require [treklet.util :as util]
            [clojure.string :as string]
            [goog.json :as json])
  (:require-macros [treklet.macros :as m]))

(defn components-from
  [a-seq]
  (map (fn [x] {:content (str x)}) a-seq))

(defn onyx-picker
  ([button components] (onyx-picker {} button components {}))
  ([mixin button components] (onyx-picker mixin button components {}))
  ([mixin button components components-mixin]
  (merge {:kind "onyx.PickerDecorator"
          :components
            [button {:kind "onyx.Picker" :components 
                     (map #(merge % components-mixin) components)}]} mixin)))

(defn camel-str
  [before property after]
  (str before (if (pos? (count before)) 
                (util/capitalize property)
                property) after))

(defn add-change-listener-method-name
  [property]
  (camel-str "add" property "ChangeListener"))

(defn remove-change-listener-method-name
  [property]
  (camel-str "remove" property "ChangeListener"))

(defn on-changed-method-name
  [property]
  (camel-str "" property "Changed")) 

(defn set-method-name
  [property]
  (camel-str "set" property ""))

(defn make-subscribable-submap
  [property]
  (let [change-listeners (atom [])]
    {(keyword (add-change-listener-method-name property))    
      (m/enyo-method [self callback] (swap! change-listeners conj callback))
     (keyword (remove-change-listener-method-name property)) 
      (m/enyo-method [self callback] (swap! change-listeners #(remove #{%2} %1) callback))
     (keyword (on-changed-method-name property))             
      (m/enyo-method [self changed-from] 
        (doseq [l @change-listeners] (l self property changed-from (aget self property))))}))

(defn make-subscribable
  [kind property]
  (let [change-listeners (make-subscribable-submap property)]
    (doseq [[func-name func] change-listeners]
      (let [func-name (name func-name)
            old-func  (aget kind func-name)]
        (aset kind func-name 
              (fn [& args] 
                (let [args (util/clj->js args)]
                  (when old-func (.apply old-func kind args))
                  (.apply func kind args))))))))

(defn add-subscribables
  [a-map]
  (let [subscribable  (a-map :subscribable)
        published     (a-map :published)
        kind          (dissoc (assoc a-map :published (merge published subscribable)) :subscribable)]
    (loop [kind kind
           subscribable (map name (keys subscribable))]
      (if (zero? (count subscribable))
        (util/clj->js kind)
        (recur (merge kind (make-subscribable-submap (first subscribable))) (rest subscribable))))))
        
(defn kind
  [a-map]
  (m/native-call [js/enyo]
    (.kind js/enyo (add-subscribables a-map))))

(defn create
  [constructor a-map]
  (new constructor (util/clj->js a-map)))

(defn create-component [a-map] (create js/enyo.Component a-map))
(defn create-control   [a-map] (create js/enyo.Control   a-map))

(defn bind-to
  [kind0 property0 kind1 property1]
  (let [bind (fn [k0 p0 k1 p1] 
    (m/native-call 
      [k0 k1]
      (util/dynamic-call k0 (add-change-listener-method-name p0)
        (fn [kind property from to]
          (util/dynamic-call k1 (set-method-name p1) to)))))]
    (bind kind0 property0 kind1 property1)
    (bind kind1 property1 kind0 property0)))

(defn bind-to-state 
  ([kind-instance property state path] (bind-to-state kind-instance
                                                      property
                                                      state
                                                      path 
                                                      :l2r identity :r2l identity))
  ([kind-instance property state path & others]
    (let [transforms (apply hash-map others)] 
      (m/native-call [kind-instance]
        (when (contains? transforms :l2r)
          (util/dynamic-call kind-instance 
            (add-change-listener-method-name property)
              (fn [kind property from to] (swap! state util/set-path path ((transforms :l2r) to)))))
        (when (contains? transforms :r2l)
          (util/state-bind state path 
            (fn [from to]
              (util/dynamic-call kind-instance (set-method-name property) ((transforms :r2l) to)))))))))

(defn on-properties-change
  [kind-instance properties cb]
  (m/native-call [kind-instance]
    (doseq [property properties]
      (util/dynamic-call kind-instance (add-change-listener-method-name property) 
        (fn [& junk] (cb))))))

(defn render-on-change
  [kind-instance & properties]
  (m/native-call [kind-instance]
    (on-properties-change kind-instance properties (fn [] (.render kind-instance)))))
