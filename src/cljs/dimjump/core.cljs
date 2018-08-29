(ns dimjump.core
  (:require [quil.core :as q]
            [quil.middleware :as m]))

(def dimensions {:w (* 0.8 (.-innerWidth js/window))
                 :h 360})

(defn setup []
  (q/frame-rate 10)
  (q/no-stroke)
  {:num 10})

(defn draw-ground []
  (q/with-fill
    [197 226 175]
    (q/rect 0
            (* 0.75 (:h dimensions))
            (:w dimensions)
            (* 0.25 (:h dimensions)))))

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
    :size (vals dimensions)
    :update progress
    :middleware [m/fun-mode]))

(init)
