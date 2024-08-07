(defproject dimjump "0.1.1"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [compojure "1.7.0"]
                 [ring/ring-defaults "0.2.1"]
                 [hiccup "1.0.5"]
                 [org.clojure/clojurescript "1.11.60"]
                 [org.clojure/java.jdbc "0.6.0"]
                 [quil "2.7.1"]
                 [com.h2database/h2 "1.4.193"]]
  :plugins [[lein-ring "0.12.6"]
            [lein-figwheel "0.5.20"]]
  :cljsbuild {:builds [{:source-paths ["src/cljs"]
                        :figwheel true
                        :id "dev"
                        :compiler {:optimizations :none
                                   :main "dimjump.core"
                                   :asset-path "js"
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js"}}]}
  :ring {:handler dimjump.handler/app
         :auto-reload? true
         :reload-paths ["src/" "resources/"]
         :open-browser? false}
  :source-paths ["src/clj"]
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})
