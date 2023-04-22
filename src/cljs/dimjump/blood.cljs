(ns dimjump.blood
  (:require [quil.core :as q :include-macros true]
            [dimjump.coordinate :as coordinate]
            [dimjump.data :as data :refer [constants]]))

(defrecord Blood
  [points velocity x-block speed w h alpha move-x max-velocity stay]
  coordinate/Coordinate

  (draw [_]
    "Renders blood with fade-off trail relative to current speed"
    (let [points (reverse points)
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

  (pos [blood]
    "Returns a map of current position and dimensions (x, y, w, h, rotation)"
    (merge (last points)
           (select-keys blood [:w :h])))

  (next-rotation [blood]
    "Returns next rotation value for blood"
    (if (moving? blood)
      (coordinate/rotate blood)
      (coordinate/rotation blood)))

  (progress [blood]
    "Receives blood state and returns next state."
    (let [next-x (+ move-x (coordinate/next-x-position blood))
          next-y (coordinate/next-y-position blood)
          next-r (coordinate/next-rotation blood)]
      (if stay
        (-> blood
            next-opacity
            (coordinate/add-point next-x next-y rotation))
        (-> blood
            (coordinate/add-point next-x next-y next-r)
            (coordinate/next-velocity max-velocity))))))

(defn spawn [{:keys [velocity] :as opts}]
  (map->Blood (merge
                (coordinate/spawn (update opts :speed #(+ (- % 2) (rand-int 3))))
                {:w 3
                 :h 3
                 :max-velocity (min (- velocity) (:max-velocity constants))
                 :stay false
                 :alpha 255})))

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

(defn next-opacity [blood]
  (update blood :alpha - (:blood-degradation constants)))
