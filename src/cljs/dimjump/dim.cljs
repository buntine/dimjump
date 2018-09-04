(ns dimjump.dim
  (:require [quil.core :as q :include-macros true]
            [dimjump.data :as data :refer [constants]]))

(defn spawn []
  {:points (take 5 (repeat {:x -20 :y (:floor-y constants)}))
   :w 16
   :h 24
   :velocity 0
   :deaths 0
   :velocity-big -10
   :velocity-small -8
   :frames {:standing [(q/load-image "/images/dim1.png")
                       (q/load-image "/images/dim2.png")]
            :ducking [(q/load-image "/images/dim3.png")
                      (q/load-image "/images/dim4.png")]}
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

(defn past? [dim x]
  "Returns true is dim has travelled past given X point"
  (let [pos (position dim)]
    (>= (:x pos) x)))

(defn add-point 
  ([dim x y]
    (add-point dim {:x x :y y}))
  ([dim point]
    (update dim :points (comp vec rest conj) point)))

(defn set-speed [{:keys [speed] :as dim} op]
  "Applies the given op on the speed and updates it if the result is within
  the bounds"
  (if-let [next-speed ((:speed-range constants) (op speed))]
    (assoc dim :speed next-speed)
    dim))

(defn speed-up [dim] (set-speed dim inc))
(defn speed-down [dim] (set-speed dim dec))

(defn reset [dim]
  "Moves dim back to start of the screen"
  (add-point dim -20 (:y (position dim))))

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
          (assoc :velocity velocity)))))

(defn finalize-jump [dim]
  "If jump is finished then reset velocity and just status"
  (if (and (:jumping dim)
           (= (:y (position dim)) (:floor-y constants)))
    (-> dim
        toggle-jump
        (assoc :velocity 0))
    dim))

(defn kill [dim]
  (-> dim
      (update :deaths inc)
      reset))

(defn progress-velocity [dim]
  "Updates velocity during a jump"
  (if (:jumping dim)
    (update dim :velocity + (:gravity constants))
    dim))

(defn next-y-position [dim]
  "Returns the next Y position for the dim (necessary during a jump)"
  (let [y (:y (position dim))
        next-y (+ y (:velocity dim))]
    (min (:floor-y constants) next-y)))

(defn next-x-position [dim]
  "Returns next X position for dim"
  (+ (:x (position dim)) (:speed dim)))

(defn progress [dim]
  "Receives player state and returns next state."
  (let [next-x (next-x-position dim)
        next-y (next-y-position dim)]
    (-> dim
        (add-point next-x next-y)
        progress-velocity
        finalize-jump)))

(defn sprite-for [frame dim]
  "Returns the PImage suitable for the given frame number"
  (let [all-frames (:frames dim)
        frames ((if (:ducking dim) :ducking :standing) all-frames)]
    (frames (mod (int (/ frame (:animation-speed dim))) 2))))

(defn trail-opacities
  "A lazy sequence that produces the opacities: 255 60 50 40 ..."
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
