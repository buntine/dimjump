(ns dimjump.corpse
  (:require [quil.core :as q :include-macros true]))

(defn spawn [{x :x y :y h :h rotation :rotation} sprite]
  {:x x
   :y y
   :h h
   :rotation rotation
   :degradation 4
   :sprite (q/load-image (.. sprite -sourceImg -src)) ; Effectively clones the current dim sprite.
   :alpha 255})

(defn draw [{x :x y :y h :h rotation :rotation sprite :sprite alpha :alpha}]
  (let [distance-from-pi (Math/abs (- Math/PI rotation))]
    (q/push-matrix)
    (q/tint 255 alpha)
    (q/translate (- x 0)
                 (- y (* h (/ distance-from-pi Math/PI))))
    (q/rotate rotation)
    (q/image sprite 0 0)
    (q/no-tint)
    (q/pop-matrix)))

(defn progress [corpse]
  (update corpse :alpha - (:degradation corpse)))

(defn visible? [{alpha :alpha}]
  (>= alpha 0))
