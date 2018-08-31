(ns dimjump.corpse
  (:require [quil.core :as q :include-macros true]))

(defn create-from [{x :x y :y} sprite]
  {:x x
   :y y
   :degradation 10
   :sprite sprite 
   :alpha 255})

(defn draw [corpse]
  (let [{x :x y :y sprite :sprite alpha :alpha} corpse]
    (q/tint 255, alpha)
    (q/image sprite
             x
             (- y (.-height sprite)))
    (q/tint 255, 255)))

(defn progress [corpse]
  (update corpse :alpha - (:degradation corpse)))

(defn visible? [corpse]
  (>= (:alpha corpse) 0))
