(ns dimjump.exit
  (:require [quil.core :as q :include-macros true]
            [dimjump.object :as object]
            [dimjump.data :as data :refer [constants]]))

(defrecord Exit
  [x y w h min-x max-y min-y speed move-x move-y]
  object/Entity

  (draw [_ ctx]
    (q/with-fill (constants :exit-color)
      (q/rect x (- y h) w h)))

  (collision? [_ {px :x py :y pw :w ph :h}]
    "Returns true if the given obstacle (o) has collided with the
     given entity (the player - p). Currently operates on very basic 2D rectangles
     and does not support bounding boxes on rotated shapes."
    (let [p-top (- py (/ ph 2))
          p-bottom (+ py (/ ph 2))
          p-left (- px (/ pw 2))
          p-right (+ px (/ pw 2))]
      (and (< p-left (+ x w))
           (< x p-right)
           (< p-top y)
           (< (- y h) p-bottom))))
  
  (on-collision [_ state]
    (assoc state :phase 1)))
