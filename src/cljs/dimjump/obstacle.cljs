(ns dimjump.obstacle
  (:require [quil.core :as q :include-macros true]))

(defn draw [{x :x w :w h :h vertices :vertices} floor-y]
  (q/with-fill
    [178 145 116]
    (q/begin-shape)
    (doseq [[x y] vertices]
      (q/vertex x (+ floor-y y)))
    (q/end-shape)))

(defn collision? [floor-y {px :x py :y pw :w ph :h} {ox :x ow :w oh :h offset :offset}]
  "Returns true if any obstacle in the level has collided
   with the given entity (the player)"
  (let [oy (- floor-y offset oh)
        py-top (- py ph)]
    (and (< px (+ ox ow))
         (< ox (+ px pw))
         (< py-top (+ oy oh))
         (< oy (+ py-top ph)))))
