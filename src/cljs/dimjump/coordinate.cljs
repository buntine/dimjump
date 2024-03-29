(ns dimjump.coordinate
  (:require [dimjump.data :as data :refer [constants]]))

(defprotocol Coordinate
  "Represents a spawnable coordinate on screen. Coordinates have a collection of 'points', in order to represent trails."
  (draw [coord] "Draws the coordinate to the canvas")
  (next-rotation [coord] "Produces the next rotation value for the coordinate")
  (pos [coord] "Returns a map of current position and dimensions (x, y, w, h, rotation)")
  (progress [coord] "Produces the next state for the given coordinate"))

(defn spawn [{:keys [x y speed velocity] :or [velocity 0]}]
  {:points (take 5 (repeat {:x x
                            :y y
                            :rotation 0}))
   :velocity velocity
   :move-x 0
   :x-block nil
   :speed speed})

(defn past? [coord x-point]
  "Returns true if coordinate has travelled past given X point"
  (let [{:keys [x]} (pos coord)]
    (>= x x-point)))

(defn fully-past? [coord x-point]
  "Returns true if coordinate has travelled completely past given X point"
  (let [{:keys [x w]} (pos coord)]
    (>= (- x (/ w 2)) x-point)))

(defn fully-before? [coord x-point]
  "Returns true if coordinate is fully before given X point"
  (let [{:keys [x w]} (pos coord)]
    (<= (+ x (/ w 2)) x-point)))

(defn offscreen-right? [coord]
  (fully-past? coord (:w constants)))

(defn offscreen-left? [coord]
  (fully-before? coord 0))

(defn offscreen-top? [coord]
  (let [{:keys [y h]} (pos coord)]
    (<= (+ y (/ h 2)) 0)))

(defn offscreen-bottom? [coord]
  (let [{:keys [y h]} (pos coord)]
    (>= (- y (/ h 2)) (:h constants))))

(defn add-point 
  "Adds a new positional point for the coordinate. Each coordinate has a set of 'points', each
   of which is rendered on each draw. This allows for speed trails."
  ([coord x y r]
    (add-point coord {:x x :y y :rotation r}))
  ([coord point]
    (update coord :points (comp vec rest conj) point)))

(defn rectify-point
  "Updates the most recently added point rather than popping the first one and adding a
   new one."
  ([coord x y r]
    (rectify-point coord {:x x :y y :rotation r}))
  ([coord point]
    (-> coord
        (update :points (comp vec butlast))
        (update :points (comp vec conj) point))))

(defn next-velocity
  "Produces the next velocity (for a jumping/falling coordinate)"
  ([coord]
   (next-velocity coord (:fall-velocity constants)))
  ([{:keys [jump-gravity] :as coord} max-velocity]
   (update coord :velocity #(min max-velocity
                                 (+ % (if (> jump-gravity 0) jump-gravity (:gravity constants)))))))

(defn next-y-position
  "Returns the next Y position for the coordinate.
   floor represents the largest Y (e.g the position of an active platform).
   Calls the velocity-fn, which should return the current coordinates velocity (or 0)."
  ([coord]
    (next-y-position coord ##Inf #(:velocity %)))
  ([coord floor velocity-fn]
    (let [current-y (:y (pos coord))
          y (cond (offscreen-top? coord) (:h constants)
                  (offscreen-bottom? coord) 0
                  :else current-y)
          next-y (+ y (velocity-fn coord))]
      (min floor next-y))))

(defn apply-x-block [coord x dir]
  "Applies a block to the X-axis."
  (assoc coord :x-block {:x x :dir dir}))

(defn block [{:keys [x-block] :as coord}]
  "Ensures a 'block' is adhered to, which will prevent the coordinate from
   passing through an coordinate that has blocked the X axis.

   Returns either nil or the X position which the player cannot pass."
  (when x-block
    (let [{:keys [w]} (pos coord)
          {:keys [x dir]} x-block
          half-width (/ w 2)]
      (case dir
        :left (- x half-width 1)
        :right (+ x half-width 1)))))

(defn next-x-position [{:keys [speed] :as coord}]
  "Returns next X position for coordinate"
  (let [current-x (:x (pos coord))
        x (cond (offscreen-right? coord) 0
                (offscreen-left? coord) (:w constants)
                :else current-x)]
    (or (block coord)
        (+ x speed))))

(defn rotation [coord]
  "Returns current rotation value for coordinate"
  (:rotation (pos coord)))

(defn rotate [coord]
  "Returns next rotation value for coordinate"
  (let [{:keys [rotation]} (pos coord)]
    (+ rotation (* Math/PI 0.079753))))

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
          (fn [{:keys [speed] :as coord}]
            (let [next-speed (op speed)
                  low (speed-threshold coord :right :speed-min)
                  high (speed-threshold coord :left :speed-max)]
              (cond
                (<= low next-speed high) (assoc coord :speed next-speed)
                (< speed low) (assoc coord :speed low)
                (> speed high) (assoc coord :speed high)
                :else coord))))]
  (def speed-up (set-speed #(+ % (:speed-jump constants))))
  (def speed-down (set-speed #(- % (:speed-jump constants)))))

(defn trail-opacities
  "A lazy sequence that produces the opacities: 255 60 50 40 ..."
  ([] (trail-opacities 255))
  ([n] (let [next-n (if (= n 255) 60 (- n 10))]
         (lazy-seq 
           (cons n (trail-opacities next-n))))))
