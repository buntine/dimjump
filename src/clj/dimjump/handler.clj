(ns dimjump.handler
  (:require [compojure.core :refer :all]
            [dimjump.views :as views]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defroutes app-routes
  (GET "/" [] (views/homepage))
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))
