(ns dimjump.blood
  (:require [quil.core :as q :include-macros true]
            [dimjump.data :as data :refer [constants]]))

(defn spawn [{x :x y :y} velocity speed]
  {:x x
   :y y
   :w 3
   :h 3
   :velocity velocity
   :stay false
   :speed (+ (- speed 2) (rand-int 3))
   :rotation 0
   :degradation 0.6
   :alpha 255})

(defn visible? [{alpha :alpha}]
  (>= alpha 0))

(defn moving? [{stay :stay}]
  (not stay))

(defn stay [blood]
  (assoc blood :stay true))

(defn draw [{x :x y :y w :w h :h rotation :rotation
             alpha :alpha}]
  (q/with-fill [138 7 7 alpha]
    (q/push-matrix)
    (q/translate x y)
    (q/rotate rotation)
    (q/rect 0 0 w h)
    (q/pop-matrix)))

(defn next-x-position [blood]
  (update blood :x + (:speed blood)))

(defn next-y-position [blood]
    (let [current-y (:y blood)
          y (if (> current-y (:h constants)) 0 current-y)
          next-y (+ y (:velocity blood))]
      (assoc blood :y next-y)))

(defn update-opacity [blood]
  (update blood :alpha - (:degradation blood)))

(defn update-rotation [{:keys [rotation] :as blood}]
  (if (moving? blood)
    (update blood :rotation + (* Math/PI 0.079753))
    blood))

(defn update-velocity [blood]
  (update blood :velocity (fn [v]
                            (min (:fall-velocity constants)
                                 (+ v (:gravity constants))))))

(defn progress [blood]
  "Receives blood state and returns next state."
  (if (:stay blood)
    (update-opacity blood)
    (-> blood
        next-x-position
        next-y-position
        update-velocity
        update-rotation)))
