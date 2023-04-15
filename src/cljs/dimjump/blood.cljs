(ns dimjump.blood
  (:require [quil.core :as q :include-macros true]
            [dimjump.position :as position]
            [dimjump.data :as data :refer [constants]]))

(defn spawn [{:keys [velocity] :as opts}]
  (merge
    (position/spawn (update opts :speed #(+ (- % 2) (rand-int 3))))
    {:w 3
     :h 3
     :max-velocity (min (- velocity) (:max-velocity constants))
     :stay false
     :degradation 0.6
     :alpha 255}))

(defn visible? [{alpha :alpha}]
  (>= alpha 0))

(defn moving? [{stay :stay}]
  (not stay))

(defn unstay [blood]
  (assoc blood :stay false))

(defn stay [blood]
  (-> blood
      (assoc :stay true
             :speed 0
             :velocity 0)))

(defn draw [{:keys [alpha w h] :as blood}]
  "Renders blood with fade-off trail relative to current speed"
  (let [points (reverse (:points blood))
        trail (take (count points) (position/trail-opacities))
        trail-with-opacities (map-indexed #(vector %2 (nth trail %1))
                                          points)]
    (doseq [[{x :x y :y rotation :rotation} opacity] trail-with-opacities]
      (q/with-fill [138 7 7 (* alpha (/ opacity 255))]
        (q/push-matrix)
        (q/translate x y)
        (q/rotate rotation)
        (q/rect 0 0 w h)
        (q/pop-matrix)))))

(defn next-opacity [blood]
  (update blood :alpha - (:degradation blood)))

(defn next-rotation [blood]
  "Returns next rotation value for blood"
  (if (moving? blood)
    (position/next-rotation blood)
    (position/current-rotation blood)))

(defn progress [{:keys [max-velocity stay rotation] :as blood}]
  "Receives blood state and returns next state."
  (let [next-x (position/next-x-position blood)
        next-y (position/next-y-position blood)
        next-r (next-rotation blood)]
    (if stay
      (-> blood
          next-opacity
          (position/add-point next-x next-y rotation))
      (-> blood
          (position/add-point next-x next-y next-r)
          (position/next-velocity max-velocity)))))
