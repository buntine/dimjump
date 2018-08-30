(ns dimjump.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [dimjump.dim :as dim]
            [dimjump.level :as level]
            [dimjump.data :as data]))

(def dimensions {:w (* 0.8 (.-innerWidth js/window))
                 :h 360})

(defn setup []
  (let [floor-y (* 0.75 (:h dimensions))]
    (q/no-stroke)
    {:frame 0
     :w (:w dimensions)
     :h (:h dimensions)
     :floor-y floor-y
     :gravity 0.8
     :velocity-big -10
     :velocity-small -8
     :levels data/levels
     :dim (dim/initial-state floor-y q/load-image)}))

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
    38 (dim/start-jump state)
    state))

(defn draw [state]
  (q/background (q/color 176 214 255))
  (draw-ground state)
  (level/draw state)
  (dim/draw state))

(defn detect-collision [state]
  (if (level/collision? state)
    (dim/kill state)
    state))

(defn progress [state]
  (-> state
      inc-frame
      dim/progress
      detect-collision))

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
