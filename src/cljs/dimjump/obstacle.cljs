(ns dimjump.obstacle
  (:require [quil.core :as q :include-macros true]))

(defn draw [{x :x w :w h :h} floor-y]
  (q/with-fill
    [178 145 116]
    (q/rect x
      (- floor-y h)
      w
      h)))

(defn collision? [floor-y {px :x py :y pw :w ph :h} {ox :x ow :w oh :h offset :offset}]
  "Returns true if any obstacle in the level has collided
   with the given entity (the player)"
  (let [oy (- floor-y offset)]
    (and (< px (+ ox ow))
         (< ox (+ px pw))
         (< py (+ oy oh))
         (< oy (+ py ph)))))
