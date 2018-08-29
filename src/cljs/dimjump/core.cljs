(ns dimjump.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [dimjump.dim :as dim]))

(def dimensions {:w (* 0.8 (.-innerWidth js/window))
                 :h 360})

(defn setup []
  (q/no-stroke)
  {:frame 0
   :floor-y (* 0.75 (:h dimensions))
   :dim (dim/initial-state q/load-image)})

(defn inc-frame [state]
  (update state :frame inc))

(defn draw-ground [state]
  (let [floor-y (:floor-y state)]
    (q/with-fill
      [197 226 175]
      (q/rect 0
              floor-y
              (:w dimensions)
              (- (:h dimensions) floor-y)))))

(defn key-pressed [state event]
  (case (:key-code event)
    32 (dim/toggle-duck state)
    :else state))

(defn draw [state]
  (q/background (q/color 176 214 255))
  (draw-ground state)
  (dim/draw state))

(defn progress [state]
  (-> state
      inc-frame
      dim/progress))

(defn init []
  (q/defsketch dim-jump
    :host "game"
    :settings #(q/smooth 2)
    :size (vals dimensions)
    :frame-rate 60
    :setup setup
    :draw draw
    :key-pressed key-pressed
    :update progress
    :middleware [m/fun-mode]))

(init)
