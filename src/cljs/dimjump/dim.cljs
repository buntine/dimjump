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
  (fn [dim]
    (update dim flag not)))

(def toggle-duck (toggle-flag :ducking))
(def toggle-jump (toggle-flag :jumping))

(defn reset [dim]
  (assoc dim :x -20))

(defn accellerate [dim]
  (update dim :x + (:speed dim)))

(defn duck [dim]
  "Toggles ducking and doubles/halves height of player accordingly"
  (let [operator (if (:ducking dim) * /)]
    (-> dim
        toggle-duck
        (update :h operator 2))))

(defn jump [dim]
  "Initiates a small or big jump, depending on ducking status"
  (if (:jumping dim)
    dim
    (let [velocity (if (:ducking dim)
                     (:velocity-small dim)
                     (:velocity-big dim))]
      (-> dim
          toggle-jump
          (assoc :v velocity)))))

(defn end-jump [dim y]
  (-> dim
      toggle-jump
      (assoc :y y)))

(defn kill [dim]
  (-> dim
      (update :deaths inc)
      reset))

(defn progress-jump [dim floor-y gravity]
  "Updates state to reflect players Y position during jump"
  (let [next-y (+ (:y dim) (:v dim))]
    (if (:jumping dim)
      (if (>= next-y floor-y)
        (end-jump dim floor-y)
        (-> dim
            (assoc :y next-y)
            (update :v + gravity)))
      dim)))

(defn next-level [dim]
  (-> dim
      (update :level inc)
      reset))

(defn progress-level [dim width]
  "Checks if it's necessary to go to the next level."
  (if (>= (:x dim) width)
    (next-level dim)
    dim))

(defn progress [state]
  "Receives full game state and returns next state. Coupling is permitted
   here."
  (assoc state
         :dim
         (-> (:dim state)
             accellerate
             (progress-jump (:floor-y state) (:gravity state))
             (progress-level (:w state)))))

(defn sprite-for [frame dim]
  "Returns the PImage suitable for the given frame number"
  (let [all-frames (:frames dim)
        frames ((if (:ducking dim) :ducking :standing) all-frames)]
    (frames (mod (int (/ frame (:animation-speed dim))) 2))))

(defn draw [dim frame-number]
  "Receives player state and renders"
  (let [sprite (sprite-for frame-number dim)]
    (q/image sprite
             (:x dim)
             (- (:y dim) (.-height sprite)))))
