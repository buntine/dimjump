(ns dimjump.blood
  (:require [quil.core :as q :include-macros true]
            [dimjump.coordinate :as coordinate]
            [dimjump.data :as data :refer [constants]]))

(defn spawn [{:keys [velocity] :as opts}]
  (merge
    (coordinate/spawn (update opts :speed #(+ (- % 2) (rand-int 3))))
    {:w 3
     :h 3
     :max-velocity (min (- velocity) (:max-velocity constants))
     :stay false
     :degradation 0.6
     :move-x 0
     :alpha 255}))

(defn visible? [{alpha :alpha}]
  (>= alpha 0))

(defn moving? [{stay :stay}]
  (not stay))

(defn unstay [blood]
  (assoc blood
         :stay false
         :move-x 0))

(defn stay [blood {:keys [move-x]}]
  (assoc blood :stay true
               :speed 0
               :move-x move-x
               :velocity 0))

(defn draw [{:keys [alpha w h] :as blood}]
  "Renders blood with fade-off trail relative to current speed"
  (let [points (reverse (:points blood))
        trail (take (count points) (coordinate/trail-opacities))
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
    (coordinate/next-rotation blood)
    (coordinate/current-rotation blood)))

(defn progress [{:keys [max-velocity stay rotation move-x] :as blood}]
  "Receives blood state and returns next state."
  (let [next-x (+ move-x (coordinate/next-x-position blood))
        next-y (coordinate/next-y-position blood)
        next-r (next-rotation blood)]
    (if stay
      (-> blood
          next-opacity
          (coordinate/add-point next-x next-y rotation))
      (-> blood
          (coordinate/add-point next-x next-y next-r)
          (coordinate/next-velocity max-velocity)))))
