(ns dimjump.core
  (:require [quil.core :as q]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 10)
  {:num 10})

(defn draw [state]
  (q/fill (q/color 150 150 150))
  (q/rect (:num state) 30 30 30))

(defn progress [state]
  {:num (inc (:num state))})

(defn init []
  (q/defsketch dim-jump
    :host "game"
    :settings #(q/smooth 2)
    :setup setup
    :draw draw
    :update progress
    :middleware [m/fun-mode]))
