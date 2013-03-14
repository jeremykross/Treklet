(ns treklet.position
  (:require [goog.dom         :as dom    ] 
            [goog.string      :as string ]
            [goog.dom.classes :as classes]
            [goog.dom.dataset :as dataset]
            [goog.array       :as arr]))

(defn dom-generate-plutoid-1
  [node]
  (cond 
    (= (.-nodeType node) 1) 
    (do 
      (let [collected-hash
            (loop [child-nodes (.-childNodes node) collected-hash ""]
              (if (zero? (count child-nodes)) collected-hash)
              (let [h (dom-generate-plutoid-1 (first child-nodes))]
                (if (and h (> (.-length h) 0))
                  (recur (rest child-nodes) (str collected-hash h))
                  (recur (rest child-nodes) collected-hash))))]
        (if (not (= (. (.-tagName node) (toUpperCase)) "BODY"))
          (dataset/set node "plutoid" 1234) 
          (dataset/set node "plutoid" (hash (str (.tagName node) collected-hash))))
        (js/alert (str "Set " (dataset/get node "plutoid") " for " (dom/getOuterHtml node)))
        collected-hash))
    (= (.-nodeType node) 3) (string/trim (.nodeValue node))))

(defn dom-generate-plutoid
  [node]
  (when (= (.-nodeType node) 1)
    (let [plutoid (hash (dom/getOuterHtml node))]
      (dataset/set node "plutoid" (str plutoid))
      (classes/add node  (str "_" plutoid))
      (classes/add node 
                   (doseq [child (arr/toArray (.-childNodes node))]
                     (dom-generate-plutoid child))))))

  ;Generate a pluto id for this node and all of its children.)
