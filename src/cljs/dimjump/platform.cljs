(ns dimjump.platform
  (:require [quil.core :as q :include-macros true]
            [dimjump.object :as object]
            [dimjump.data :as data :refer [constants]]))

(defn spawn [opts]
  (object/spawn :platform opts))

(defn draw [{:keys [x w h y]} ctx]
  (.beginPath ctx)
  (.rect ctx x (- y h) w h)
  (.closePath ctx)
  (.fill ctx)

  (q/with-fill (constants :grass-color)
    (q/rect x (- y h) w (constants :grass-height))))

(defn y-top [{:keys [y h]}]
  "Returns Y of the top of the platform."
  (- y h))

(defn x-right [{:keys [x w]}]
  "Returns X of the right of the platform."
  (+ x w))

(defn collision? [{px :x py :y pw :w ph :h} {ox :x oy :y ow :w oh :h}]
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
        o-right (+ ox ow)
        o-top (- oy oh)]
    (and (< p-left o-right)
         (< ox p-right)
         (< p-top o-top)
         (<= o-top p-bottom))))
