(ns dimjump.core
  (:require [quil.core :as q]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 10)
  (q/no-stroke)
  {:num 10})

(defn draw-ground []
  (q/with-fill
    [197 226 175]
    (q/rect 0 200 500 200))) ; TODO: Calcuate correctly: 25% of "height", 100% of width. Positioned at 75% from top.

(defn draw [state]
  (q/background (q/color 176 214 255))
  (draw-ground)
  (q/with-fill
    [150 150 150]
    (q/rect (:num state) 30 30 30)))

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
