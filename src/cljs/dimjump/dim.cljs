(ns dimjump.dim
  (:require [quil.core :as q :include-macros true]
            [dimjump.data :as data :refer [constants]]
            [dimjump.platform :as platform]))

(defn spawn [{x :x y :y speed :speed}]
  {:points (take 5 (repeat {:x x
                            :y y
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
   :speed speed
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

(defn fully-past? [dim x]
  "Returns true if dim has travelled completely past given X point"
  (let [pos (position dim)]
    (>= (- (:x pos) (/ (:w dim) 2)) x)))

(defn fully-before? [dim x]
  "Returns true if dim is fully before given X point"
  (let [pos (position dim)]
    (<= (+ (:x pos) (/ (:w dim) 2)) x)))

(defn offscreen-right? [dim]
  (fully-past? dim (:w constants)))

(defn offscreen-left? [dim]
  (fully-before? dim 0))

(defn offscreen-top? [dim]
  (let [{y :y} (position dim)]
    (<= (+ y (/ (:h dim) 2)) 0)))

(defn offscreen-bottom? [dim]
  (let [{y :y} (position dim)]
    (>= (- y (/ (:h dim) 2)) (:h constants))))

(defn floor-y [{:keys [active-platform] :as dim}]
  (if active-platform
    (- (platform/y-top active-platform)
       (/ (:h dim) 2))
    ##Inf))

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

(defn reset [dim {:keys [x y speed]}]
  "Moves dim back to start of the screen, at the given Y position"
  (-> dim
      (assoc :active-platform nil)
      (assoc :speed speed)
      (assoc :jumping false)
      (add-point x y 0)))

(defn duck [dim]
  "Toggles ducking and doubles/halves height of player accordingly"
  (let [operator (if (:ducking dim) * /)]
    (-> dim
        toggle-duck
        (update :h operator 2))))

(defn jumpable? [{:keys [jumping active-platform] :as dim}]
  "Returns true if dim is currently able to jump"
  (and (not jumping) active-platform))

(defn jump [{:keys [ducking] :as dim}]
  "Initiates a small or big jump, depending on ducking status"
  (if-not (jumpable? dim)
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

(defn kill [dim initial]
  (-> dim
      (update :deaths inc)
      (assoc :active-platform nil)
      (reset initial)))

(defn next-velocity [dim]
  "Updates velocity during a jump"
  (if (:jumping dim)
    (update dim :velocity (fn [v]
                            (min (:fall-velocity constants)
                                 (+ v (:gravity constants)))))
    dim))

(defn next-y-position [dim]
  "Returns the next Y position for the dim (necessary during a jump or when falling)"
  (let [floor (floor-y dim)
        current-y (:y (position dim))
        y (cond (offscreen-top? dim) (:h constants)
                (offscreen-bottom? dim) 0
                :else current-y)
        next-y (+ y (if (:jumping dim)
                      (:velocity dim)
                      (:fall-velocity constants)))]
    (min floor next-y)))

(defn next-x-position [dim]
  "Returns next X position for dim"
  (let [current-x (:x (position dim))
        x (cond (offscreen-right? dim) 0
                (offscreen-left? dim) (:w constants)
                :else current-x)]
    (+ x (:speed dim))))

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
        next-velocity
        finalize-jump)))

(defn collide-with-platform [dim platform]
  "Handles dim colliding with a platform."
  (-> dim
      (assoc :active-platform platform)
      progress))

(defn progress-platform [dim platform]
  "Handles dim moving past the end of the active platform."
  (let [finished? (or (fully-past? dim (platform/x-right platform))
                      (fully-before? dim (:x platform)))]
    (if finished?
      (assoc dim :active-platform nil)
      dim)))

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
        x-scale (if (>= (:speed dim) 0) 1.0 -1.0) ; Determine which way Dim is facing / rotating
        trail-with-opacities (map-indexed #(vector %2 (nth trail %1))
                                          points)]
    (doseq [[{x :x y :y rotation :rotation} opacity] trail-with-opacities]
      (q/push-matrix)
      (q/image-mode :center)
      (q/tint 255 opacity)
      (q/translate x y)
      (q/scale x-scale 1.0)
      (q/rotate rotation)
      (q/image sprite 0 0)
      (q/no-tint)
      (q/pop-matrix))))
