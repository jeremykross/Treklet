(ns treklet.comms
  (:require [treklet.util :as util] 
            [treklet.constants :as const]))

(def -sockio- (.connect js/io const/-sockio-addr-))

(defn notify-server
  ([evt-name] (notify-server evt-name nil))
  ([evt-name data]
    (.emit -sockio- evt-name (util/clj->js data))))

(defn react-server
  [evt-name f]
  (.on -sockio- evt-name
    (fn [data]
      (f (js->clj data :keywordize-keys true)))))
