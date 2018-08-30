(ns dimjump.dim
  (:require [quil.core :as q :include-macros true]))

(defn initial-state [y load-image]
  {:x -20
   :y y
   :w 16
   :h 24
   :v 0
   :level 0
   :deaths 0
   :velocity-big -10
   :velocity-small -8
   :frames {:standing [(load-image "/images/dim1.png")
                       (load-image "/images/dim2.png")]
            :ducking [(load-image "/images/dim3.png")
                      (load-image "/images/dim4.png")]}
   :ducking false
   :jumping false
   :speed 3
   :animation-speed 12})

(defn toggle-flag [flag]
  (fn [state]
    (update state flag not)))

(def toggle-duck (toggle-flag :ducking))
(def toggle-jump (toggle-flag :jumping))

(defn reset [state]
  (assoc state :x -20))

(defn accellerate [state]
  (update state :x + (:speed state)))

(defn duck [state]
  "Toggles ducking and doubles/halves height of player accordingly"
  (let [operator (if (:ducking state) * /)]
    (-> state
        toggle-duck
        (update :h operator 2))))

(defn jump [state]
  "Initiates a small or big jump, depending on ducking status"
  (if (:jumping state)
    state
    (let [velocity (if (:ducking state)
                     (:velocity-small state)
                     (:velocity-big state))]
      (-> state
          toggle-jump
          (assoc :v velocity)))))

(defn end-jump [state y]
  (-> state
      toggle-jump
      (assoc :y y)))

(defn kill [state]
  (-> state
      (update :deaths inc)
      reset))

(defn progress-jump [state floor-y gravity]
  "Updates state to reflect players Y position during jump"
  (let [next-y (+ (:y state) (:v state))]
    (if (:jumping state)
      (if (>= next-y floor-y)
        (end-jump state floor-y)
        (-> state
            (assoc :y next-y)
            (update :v + gravity)))
      state)))

(defn next-level [state]
  (-> state
      (update :level inc)
      reset))

(defn progress-level [state width]
  "Checks if it's necessary to go to the next level."
  (if (>= (:x state) width)
    (next-level state)
    state))

(defn progress [state]
  "Receives full game state and returns next state. Coupling is permitted
   here."
  (assoc state
         :dim
         (-> (:dim state)
             accellerate
             (progress-jump (:floor-y state) (:gravity state))
             (progress-level (:w state)))))

(defn frame-for [frame state]
  "Returns the PImage suitable for the given frame number"
  (let [all-frames (:frames state)
        frames ((if (:ducking state) :ducking :standing) all-frames)]
    (frames (mod (int (/ frame (:animation-speed state))) 2))))

(defn draw [state frame-number]
  "Receives player state and renders"
  (let [img (frame-for frame-number state)]
    (q/image img
             (:x state)
             (- (:y state) (.-height img)))))
