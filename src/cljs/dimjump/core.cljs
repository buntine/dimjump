(ns dimjump.core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [dimjump.dim :as dim]))

(def dimensions {:w (* 0.8 (.-innerWidth js/window))
                 :h 360})

(defn setup []
  (q/no-stroke)
  {:dim dim/initial-state})

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
  (dim/draw state))

(defn progress [state]
  (-> state
      dim/progress))

(defn init []
  (q/defsketch dim-jump
    :host "game"
    :settings #(q/smooth 2)
    :size (vals dimensions)
    :frame-rate 60
    :setup setup
    :draw draw
    :update progress
    :middleware [m/fun-mode]))

(init)
