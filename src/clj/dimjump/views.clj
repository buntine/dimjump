(ns dimjump.views
  (:require [hiccup.page :as page]))

(defn head [title]
  [:head
     [:title title]
     (page/include-css "/css/styles.css")])

(defn footer []
  (page/include-js "/js/main.js"))

(defn game-wrapper []
  [:div {:id "game-wrapper"}
    [:span {:id "loading"}
      "Loading"
      [:span {:class "one"} "."]
      [:span {:class "two"} "."]
      [:span {:class "three"} "."]]
    [:div {:id "sprites"}
      [:img {:id "brick" :src "/images/brick.png"}]
      [:img {:id "oilspill_1" :src "/images/oilspill_1.png"}]
      [:img {:id "oilspill_2" :src "/images/oilspill_2.png"}]
      [:img {:id "spikes_1" :src "/images/spikes_1.png"}]
      [:img {:id "rock_1" :src "/images/rock_1.png"}]
      [:img {:id "exit_sign_1" :src "/images/exit_sign_1.png"}]
      [:img {:id "trampoline_1" :src "/images/trampoline_1.png"}]]
    [:canvas {:id "game"}]])

(defn homepage []
  (page/html5
    (head "Dim Jump")
    [:body
      (game-wrapper)
      (footer)]))
