(ns dimjump.views
  (:require [hiccup.page :as page]))

(defn head [title]
  [:head
     [:title title]
     (page/include-css "/css/styles.css")])

(defn footer []
  (page/include-js "/js/main.js"))

(defn header []
  [:div {:id "header"}])

(defn game-wrapper []
  [:div {:id "game-wrapper"}
    [:canvas {:id "game"}]])

(defn homepage []
  (page/html5
    (head "Dim Jump")
    [:body
      (header)
      (game-wrapper)
      (footer)]))
