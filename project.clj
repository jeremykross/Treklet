(defproject treklet "1.0.0-SNAPSHOT"
  :description "Treklet: The Social Browsing Bookmarklet"
  :dependencies [[org.clojure/clojure "1.4.0"]
		 [hiccups "0.1.1"]]
  :plugins [[lein-cljsbuild "0.2.7"]]
  :extra-classpath-dirs ["cljs-macros"]
  :source-path "src/clj"
  :cljsbuild {
    :builds [{
      :source-path "src/cljs"
      :compiler {
        :optimizations :advanced
        :output-to "serve-dir/treklet.js"
        :output-dir "out"
        :externs ["externs.js"]}}]}
  :main treklet.core)
