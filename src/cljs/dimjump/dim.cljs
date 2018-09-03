(ns dimjump.dim
  (:require [quil.core :as q :include-macros true]
             [dimjump.sound :as sound]))

(defn spawn [y]
  {:trail 5
   :points (take 5 (repeat {:x -20 :y y}))
   :w 16
   :h 24
   :v 0
   :level 0
   :deaths 0
   :velocity-big -10
   :velocity-small -8
   :frames {:standing [(q/load-image "/images/dim1.png")
                       (q/load-image "/images/dim2.png")]
            :ducking [(q/load-image "/images/dim3.png")
                      (q/load-image "/images/dim4.png")]}
   :sound {:splat (sound/load-sound "/sounds/splat.wav")}
   :ducking false
   :jumping false
   :speed 3
   :animation-speed 12})

(defn toggle-flag [flag]
  (fn [dim]
    (update dim flag not)))

(def toggle-duck (toggle-flag :ducking))
(def toggle-jump (toggle-flag :jumping))

(defn position [dim]
  "Returns a map of current position and dimensions"
  (let [last-point (last (:points dim))]
    (merge last-point
           (select-keys dim [:w :h]))))

(defn add-point 
  ([dim {x :x y :y}]
    (add-point dim x y))
  ([dim x y]
    (update dim :points (comp rest conj) {:x x :y y})))

(defn add-point-y [dim y]
  (add-point dim (:x dim) y))

(defn add-point-x [dim x]
  (add-point dim x (:y dim)))

(defn reset [dim]
  (add-point-x dim -20))

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

;; REMOVE?
(defn end-jump [dim y]
  (-> dim
      toggle-jump
      (add-point-y y)))

(defn kill [dim]
  (-> dim
      (update :deaths inc)
      reset))

(defn progress-velocity [dim gravity]
  "Updates velocity during a jump"
  (if (:jumping dim)
    (update dim :v + gravity)
    dim))

(defn progress-jump [dim floor-y]
  "Returns the next Y position for the dim during a jump"
  (let [next-y (+ (:y dim) (:v dim))]
    (if (:jumping dim)
      (if (> next-y floor-y)
        floor-y
        next-y)
      (:y dim))))

(defn next-point [dim floor-y]
  "Returns the next point at which the player should appear"
  (let [next-x (+ (:x dim) (:speed dim))
        next-y (progress-jump dim floor-y)]
    {:x next-x
     :y next-y}))

(defn reposition [dim floor-y gravity]
  (-> dim
      (update-velocity gravity)
      (next-point floor-y)
      add-point))

(defn next-level [dim]
  (-> dim
      (update :level inc)
      reset))

(defn progress-level [dim width]
  "Checks if it's necessary to go to the next level."
  (let [last-point (last (:points dim))]
    (if (>= (:x last-point) width)
      (next-level dim)
      dim)))

(defn progress [state]
  "Receives full game state and returns next state. Coupling is permitted
   here."
  (assoc state
         :dim
         (-> (:dim state)
             (reposition (:floor-y state) (:gravity state))
             (progress-level (:w state)))))

(defn sprite-for [frame dim]
  "Returns the PImage suitable for the given frame number"
  (let [all-frames (:frames dim)
        frames ((if (:ducking dim) :ducking :standing) all-frames)]
    (frames (mod (int (/ frame (:animation-speed dim))) 2))))

(defn draw [dim frame-number]
  "Receives player state and renders"
  (let [sprite (sprite-for frame-number dim)]
    (let [{x :x y :y} (last (:points dim))]
    (q/image sprite
             x
             (- y (.-height sprite)))
    )))
