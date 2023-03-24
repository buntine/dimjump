(ns dimjump.dim
  (:require [quil.core :as q :include-macros true]
            [dimjump.data :as data :refer [constants]]
            [dimjump.platform :as platform]))

(defn spawn []
  {:points (take 5 (repeat {:x -20
                            :y (:floor-y constants)
                            :rotaion 0}))
   :w 16
   :h 24
   :velocity 0
   :deaths 0
   :frames {:standing [(q/load-image "/images/dim1.png")
                       (q/load-image "/images/dim2.png")]
            :ducking [(q/load-image "/images/dim3.png")
                      (q/load-image "/images/dim4.png")]}
   :ducking false
   :jumping false
   :active-platform nil
   :speed 4
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

(defn past? [dim x]
  "Returns true if dim has travelled past given X point"
  (let [pos (position dim)]
    (>= (:x pos) x)))

(defn floor-y [{:keys [active-platform] :as dim}]
  (let [floor (if active-platform
                (platform/y-top active-platform)
                (:floor-y constants))]
    (- floor (/ (:h dim) 2))))

(defn add-point 
  ([dim x y r]
    (add-point dim {:x x :y y :rotation r}))
  ([dim point]
    (update dim :points (comp vec rest conj) point)))

(defn set-speed [op]
  "Returns a function that applies the given op on the speed and updates
  it if the result is within the bounds"
  (fn [{:keys [speed] :as dim}]
    (if-let [next-speed ((:speed-range constants) (op speed))]
      (assoc dim :speed next-speed)
      dim)))

(def speed-up (set-speed inc))
(def speed-down (set-speed dec))

(defn reset [dim]
  "Moves dim back to start of the screen"
  (let [{y :y rotation :rotation} (position dim)]
    (add-point dim -20 y rotation)))

(defn duck [dim]
  "Toggles ducking and doubles/halves height of player accordingly"
  (let [operator (if (:ducking dim) * /)]
    (-> dim
        toggle-duck
        (update :h operator 2))))

(defn jump [{:keys [jumping ducking] :as dim}]
  "Initiates a small or big jump, depending on ducking status"
  (if jumping
    dim
    (let [velocity (if ducking
                     (:velocity-small constants)
                     (:velocity-big constants))]
      (-> dim
          toggle-jump
          (assoc :velocity velocity)))))

(defn finalize-jump [dim]
  "If jump is finished then reset velocity and just status"
  (if (and (:jumping dim)
           (= (:y (position dim)) (floor-y dim)))
    (-> dim
        toggle-jump
        (add-point (assoc (last (:points dim)) :rotation 0))
        (assoc :velocity 0))
    dim))

(defn kill [dim]
  (-> dim
      (update :deaths inc)
      reset))

(defn update-velocity [dim]
  "Updates velocity during a jump"
  (if (:jumping dim)
    (update dim :velocity + (:gravity constants))
    dim))

(defn next-y-position [dim]
  "Returns the next Y position for the dim (necessary during a jump)"
  (let [floor (floor-y dim)
        y (if (:jumping dim) (:y (position dim)) floor)
        next-y (+ y (:velocity dim))]
    (min floor next-y)))

(defn next-x-position [dim]
  "Returns next X position for dim"
  (+ (:x (position dim)) (:speed dim)))

(defn next-rotation [dim]
  "Returns next rotation value for dim (during a jump)"
  (let [{rotation :rotation} (position dim)]
    (if (:jumping dim)
      (+ rotation (* Math/PI 0.079753))
      rotation)))

(defn progress [dim]
  "Receives player state and returns next state."
  (let [next-x (next-x-position dim)
        next-y (next-y-position dim)
        next-r (next-rotation dim)]
    (-> dim
        (add-point next-x next-y next-r)
        update-velocity
        finalize-jump)))

(defn collide-with-platform [dim platform]
  "Handles dim colliding with a platform."
  (-> dim
      (assoc :active-platform platform)
      progress))

(defn sprite-for [dim]
  "Returns the PImage suitable for the given frame number"
  (let [all-frames (:frames dim)
        frames ((if (:ducking dim) :ducking :standing) all-frames)]
    (frames (mod (int (/ (q/frame-count) (:animation-speed dim))) 2))))

(defn trail-opacities
  "A lazy sequence that produces the opacities: 255 60 50 40 ..."
  ([] (trail-opacities 255))
  ([n] (let [next-n (if (= n 255) 60 (- n 10))]
         (lazy-seq 
           (cons n (trail-opacities next-n))))))

(defn draw [dim]
  "Renders dim with fade-off trail relative to current speed"
  (let [sprite (sprite-for dim)
        points (reverse (:points dim))
        trail (take (count points) (trail-opacities))
        trail-with-opacities (map-indexed #(vector %2 (nth trail %1))
                                          points)]
    (doseq [[{x :x y :y rotation :rotation} opacity] trail-with-opacities]
      (q/push-matrix)
      (q/image-mode :center)
      (q/tint 255 opacity)
      (q/translate x y)
      (q/rotate rotation)
      (q/image sprite 0 0)
      (q/no-tint)
      (q/pop-matrix))))
