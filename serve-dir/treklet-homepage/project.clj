(defproject treklet-homepage "1.0.0-SNAPSHOT"
  :description "Treklet's Homepage"
  :dependencies [[org.clojure/clojure "1.3.0"]
  		 [hiccup "0.3.7"]
		 [hiccups "0.1.1"]
		 [cssgen "0.3.0-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "0.1.8"]]
  :extra-classpath-dirs ["cljs-macros"]
  :source-path "src/clj"
  :cljsbuild {
    :builds [{
      :source-path "src/cljs"
      :compiler {
        :optimizations :advanced
        :output-to "treklet-home.js"
        :output-dir "out"
        :externs ["externs.js"]}}]}
  :main treklet-homepage.core)
