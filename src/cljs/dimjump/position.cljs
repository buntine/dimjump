(ns dimjump.position
  (:require [dimjump.data :as data :refer [constants]]))

(defn spawn [{:keys [x y speed velocity] :or [velocity 0]}]
  {:points (take 5 (repeat {:x x
                            :y y
                            :rotation 0}))
   :velocity velocity
   :x-block nil
   :speed speed})

(defn pos [object]
  "Returns a map of current position and dimensions (x, y, w, h, rotation)"
  (let [last-point (last (:points object))]
    (merge last-point
           (select-keys object [:w :h]))))

(defn past? [object x]
  "Returns true if object has travelled past given X point"
  (let [pos (pos object)]
    (>= (:x pos) x)))

(defn fully-past? [object x]
  "Returns true if object has travelled completely past given X point"
  (let [pos (pos object)]
    (>= (- (:x pos) (/ (:w object) 2)) x)))

(defn fully-before? [object x]
  "Returns true if object is fully before given X point"
  (let [pos (pos object)]
    (<= (+ (:x pos) (/ (:w object) 2)) x)))

(defn offscreen-right? [object]
  (fully-past? object (:w constants)))

(defn offscreen-left? [object]
  (fully-before? object 0))

(defn offscreen-top? [object]
  (let [{y :y} (pos object)]
    (<= (+ y (/ (:h object) 2)) 0)))

(defn offscreen-bottom? [object]
  (let [{y :y} (pos object)]
    (>= (- y (/ (:h object) 2)) (:h constants))))

(defn add-point 
  "Adds a new positional point for the object. Each object has a set of 'points', each
   of which is rendered on each draw. This allows for speed trails."
  ([object x y r]
    (add-point object {:x x :y y :rotation r}))
  ([object point]
    (update object :points (comp vec rest conj) point)))

(defn rectify-point
  "Updates the most recently added point rather than popping the first one and adding a
   new one."
  ([object x y r]
    (rectify-point object {:x x :y y :rotation r}))
  ([object point]
    (-> object
        (update :points (comp vec butlast))
        (update :points (comp vec conj) point))))

(defn next-velocity
  "Produces the next velocity (for a jumping/falling object)"
  ([object]
   (next-velocity object (:fall-velocity constants)))
  ([{:keys [jump-gravity] :as object} max-velocity]
   (update object :velocity #(min max-velocity
                                  (+ % (if (> jump-gravity 0) jump-gravity (:gravity constants)))))))

(defn next-y-position
  "Returns the next Y position for the object.
   floor represents the largest Y (e.g the position of an active platform).
   Calls the velocity-fn, which should return the current objects velocity (or 0)."
  ([object]
    (next-y-position object ##Inf #(:velocity %)))
  ([object floor velocity-fn]
    (let [current-y (:y (pos object))
          y (cond (offscreen-top? object) (:h constants)
                  (offscreen-bottom? object) 0
                  :else current-y)
          next-y (+ y (velocity-fn object))]
      (min floor next-y))))

(defn apply-x-block [object x dir]
  "Applies a block to the X-axis."
  (assoc object :x-block {:x x :dir dir}))

(defn block [{:keys [x-block speed] :as object}]
  "Ensures a 'block' is adhered to, which will prevent the object from
   passing through an object that has blocked the X axis."
  (when x-block
    (let [half-width (/ (:w (pos object)) 2)
          {:keys [x dir]} x-block]
      (case dir
        :left (when (> speed 0)
                (- x half-width))
        :right (when (< speed 0)
                (+ x half-width))))))

(defn next-x-position [{:keys [speed] :as object}]
  "Returns next X position for object"
  (let [current-x (:x (pos object))
        x (cond (offscreen-right? object) 0
                (offscreen-left? object) (:w constants)
                :else current-x)]
    (or (block object)
        (+ x speed))))

(defn current-rotation [object]
  "Returns current rotation value for object"
  (:rotation (pos object)))

(defn next-rotation [object]
  "Returns next rotation value for object"
  (let [{rotation :rotation} (pos object)]
    (+ (current-rotation object) (* Math/PI 0.079753))))

(letfn [(speed-threshold [{:keys [x-block]} blocking-dir speed-const]
          "Returns a min/max speed considering the current block on the X
           axis. Basically, if the player is blocked moving forward/backwards
           on the X axis, their speed is capped at 0."
          (if-let [{:keys [dir]} x-block]
            (if (= dir blocking-dir)
              0
              (speed-const constants))
            (speed-const constants)))
        (set-speed [op]
          "Returns a function that applies the given op on the speed and updates
          it if the result is within the bounds"
          (fn [{:keys [speed] :as object}]
            (let [next-speed (op speed)
                  low (speed-threshold object :right :speed-min)
                  high (speed-threshold object :left :speed-max)]
              (cond
                (<= low next-speed high) (assoc object :speed next-speed)
                (< speed low) (assoc object :speed low)
                (> speed high) (assoc object :speed high)
                :else object))))]
  (def speed-up (set-speed #(+ % (:speed-jump constants))))
  (def speed-down (set-speed #(- % (:speed-jump constants)))))

(defn trail-opacities
  "A lazy sequence that produces the opacities: 255 60 50 40 ..."
  ([] (trail-opacities 255))
  ([n] (let [next-n (if (= n 255) 60 (- n 10))]
         (lazy-seq 
           (cons n (trail-opacities next-n))))))
