(ns dimjump.position
  (:require [dimjump.data :as data :refer [constants]]))

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
  ([object x y r]
    (add-point object {:x x :y y :rotation r}))
  ([object point]
    (update object :points (comp vec rest conj) point)))

(defn next-velocity
  "Produces the next velocity (for a jumping/falling object)"
  ([object]
   (next-velocity object (:fall-velocity constants)))
  ([object max-velocity]
   (update object :velocity #(min max-velocity
                                  (+ % (:gravity constants))))))

(defn next-y-position
  "Returns the next Y position for the object.
   floor represents the largest Y (e.g the position of an active platform).
   Calls the velocity-fn, which should return the current objects velocity (or 0)."
  ([object]
    (next-y-position object 100000 #(:velocity %)))
  ([object floor velocity-fn]
    (let [current-y (:y (pos object))
          y (cond (offscreen-top? object) (:h constants)
                  (offscreen-bottom? object) 0
                  :else current-y)
          next-y (+ y (velocity-fn object))]
      (min floor next-y))))

(defn next-x-position [object]
  "Returns next X position for object"
  (let [current-x (:x (pos object))
        x (cond (offscreen-right? object) 0
                (offscreen-left? object) (:w constants)
                :else current-x)]
    (+ x (:speed object))))

(defn current-rotation [object]
  "Returns current rotation value for object"
  (:rotation (pos object)))

(defn next-rotation [object]
  "Returns next rotation value for object"
  (let [{rotation :rotation} (pos object)]
    (+ (current-rotation object) (* Math/PI 0.079753))))

(defn trail-opacities
  "A lazy sequence that produces the opacities: 255 60 50 40 ..."
  ([] (trail-opacities 255))
  ([n] (let [next-n (if (= n 255) 60 (- n 10))]
         (lazy-seq 
           (cons n (trail-opacities next-n))))))
