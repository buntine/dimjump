(ns dimjump.corpse
  (:require [quil.core :as q :include-macros true]))

(defn spawn [{x :x y :y} sprite]
  {:x x
   :y y
   :degradation 2
   :sprite (q/load-image (.. sprite -sourceImg -src)) ; Effectively clones the current dim sprite.
   :alpha 255})

(defn draw [corpse]
  (let [{x :x y :y sprite :sprite alpha :alpha} corpse]
    (q/tint 255 alpha)
    (q/image sprite
             x
             (- y (.-height sprite)))
    (q/no-tint)))

(defn progress [corpse]
  (update corpse :alpha - (:degradation corpse)))

(defn visible? [corpse]
  (>= (:alpha corpse) 0))
