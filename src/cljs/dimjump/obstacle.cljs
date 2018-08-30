(ns dimjump.obstacle
  (:require [quil.core :as q :include-macros true]))

(defn draw [{x :x w :w h :h} floor-y]
  (q/with-fill
    [178 145 116]
    (q/rect x
      (- floor-y h)
      w
      h)))

(defn collision? [entity, {x :x w :w h :h}]
  "Returns true if any obstacle in the level has collided
   with the given entity (the player)"
  false)
