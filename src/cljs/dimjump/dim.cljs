(ns dimjump.dim
  (:require [quil.core :as q :include-macros true]
             [dimjump.sound :as sound]))

(defn spawn [y]
  {:points (take 5 (repeat {:x -20 :y y}))
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
  ([dim x y]
    (add-point dim {:x x :y y}))
  ([dim point]
    (update dim :points (comp vec rest conj) point)))

(defn add-point-x [dim x]
  (add-point dim x (:y (position dim))))

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

(defn end-jump [dim y]
  (if (and (:jumping dim)
           (= (:y (position dim)) y))
    (-> dim
        toggle-jump
        (assoc :v 0))
    dim))

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
  (let [y (:y (position dim))
        next-y (+ y (:v dim))]
    (min floor-y next-y)))

(defn accellerate [dim]
  (+ (:x (position dim)) (:speed dim)))

(defn next-level [dim]
  (-> dim
      (update :level inc)
      reset))

(defn progress-level [dim width]
  "Checks if it's necessary to go to the next level."
  (let [pos (position dim)]
    (if (>= (:x pos) width)
      (next-level dim)
      dim)))

(defn progress [state]
  "Receives full game state and returns next state. Coupling is permitted
   here."
  (let [dim (:dim state)
        floor-y (:floor-y state)
        gravity (:gravity state)
        next-x (accellerate dim)
        next-y (progress-jump dim floor-y)]
    (assoc state
         :dim
         (-> dim
             (add-point next-x next-y)
             (progress-velocity gravity)
             (end-jump floor-y)
             (progress-level (:w state))))))

(defn sprite-for [frame dim]
  "Returns the PImage suitable for the given frame number"
  (let [all-frames (:frames dim)
        frames ((if (:ducking dim) :ducking :standing) all-frames)]
    (frames (mod (int (/ frame (:animation-speed dim))) 2))))

(defn trail-opacities
  "A lazy sequence that produces the opacities"
  ([] (trail-opacities 255))
  ([n] (let [next-n (if (= n 255) 60 (- n 10))]
         (lazy-seq 
           (cons n (trail-opacities next-n))))))

(defn draw [dim frame-number]
  "Receives player state and renders"
  (let [sprite (sprite-for frame-number dim)
        points (reverse (:points dim))
        trail (take (count points) (trail-opacities))
        trail-with-opacities (map-indexed #(vector %2 (nth trail %1))
                                          points)]
    (doseq [[{x :x y :y} opacity] trail-with-opacities]
      (q/tint 255 opacity)
      (q/image sprite
               x
               (- y (.-height sprite)))
      (q/no-tint))))
