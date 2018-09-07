(ns dimjump.obstacle
  (:require [quil.core :as q :include-macros true]
            [dimjump.data :as data :refer [constants]]))

(defn draw [{x :x w :w h :h vertices :vertices}]
  (let [floor-y (:floor-y constants)]
    (q/with-fill
      [178 145 116]
      (q/begin-shape)
      (doseq [[x y] vertices]
        (q/vertex x (+ floor-y y)))
      (q/end-shape))))

(defn collision? [{px :x py :y pw :w ph :h} {ox :x ow :w oh :h offset :offset}]
  "Returns true if any obstacle in the level has collided with the
   given entity (the player). Currently operates on very basic 2D rectangles
   and does not support bounding boxes on rotated shapes."
  (let [floor-y (:floor-y constants)
        oy (- floor-y offset oh)
        py-top (- py (/ ph 2))
        py-bottom (+ py (/ ph 2))
        px-left (- px (/ pw 2))
        px-right (+ px (/ pw 2))]
    (and (< px-left (+ ox ow))
         (< ox px-right)
         (< py-top (+ oy oh))
         (< oy py-bottom))))
