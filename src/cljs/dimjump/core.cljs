(ns dimjump.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [dimjump.dim :as dim]
            [dimjump.obstacle :as obstacle]
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

(defn draw-level [state]
  (let [level (get-in state [:dim :level])
        obstacles (get-in state [:levels level])]
    (doseq [o obstacles]
      (obstacle/draw o (:floor-y state)))))

(defn draw-dim [state]
  (dim/draw (:dim state) (:frame state)))

(defn key-pressed [state event]
  (case (:key-code event)
    32 (update state :dim dim/toggle-duck)
    38 (update state :dim dim/start-jump)
    state))

(defn draw [state]
  (q/background (q/color 176 214 255))
  (draw-ground state)
  (draw-level state)
  (draw-dim state))

(defn detect-collision [state]
  (let [level (get-in state [:dim :level])
        obstacles (get-in state [:levels level])
        collision (some (partial obstacle/collision? (:dim state)) obstacles)]
    (if collision
      (update state :dim dim/kill)
      state)))

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
