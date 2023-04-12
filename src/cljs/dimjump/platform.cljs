(ns dimjump.platform
  (:require [quil.core :as q :include-macros true]
            [dimjump.object :as object]
            [dimjump.dim :as dim]
            [dimjump.data :as data :refer [constants]]))

(defrecord Platform
  [x y w h min-x max-y min-y speed move-x move-y]
  object/Entity

  (draw [_ ctx]
    (.beginPath ctx)
    (.rect ctx x (- y h) w h)
    (.closePath ctx)
    (.fill ctx)

    (q/with-fill (constants :grass-color)
      (q/rect x (- y h) w (constants :grass-height))))

  (collision? [_ {px :x py :y pw :w ph :h}]
    "Returns true if the given platform (o) has collided with the
     given entity (the player - p). Currently operates on very basic 2D rectangles
     and does not support bounding boxes on rotated shapes.

     Note that a collision in this context means that the player landed on TOP of
     the platform. Other types of collisions with a platform are handled by the
     collision detection in the obstacles namespace."
    (let [p-top (- py (/ ph 2))
          p-bottom (+ py (/ ph 2))
          p-left (- px (/ pw 2))
          p-right (+ px (/ pw 2))
          o-right (+ x w)
          o-top (- y h)]
      (and (< p-left o-right)
           (< x p-right)
           (< p-top o-top)
           (<= o-top p-bottom))))
  
  (on-collision [entity state]
    (-> state
        (update :dim dim/collide-with-platform entity))))
