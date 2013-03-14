(ns treklet-homepage.macros)

;*CLJSBUILD-MACRO-FILE*;

(defmacro type-phrases
  [&phrases]
  (reduce (fn [a b] `(type-at ~a (type-at ~b 

