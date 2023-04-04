(ns dimjump.obstacle
  (:require [quil.core :as q :include-macros true]
            [dimjump.object :as object]))

(defn spawn [opts]
  (object/spawn :obstacle opts))

(defn draw [{:keys [x w h y]} ctx]
  (.beginPath ctx)
  (.rect ctx x (- y h) w h)
  (.closePath ctx)
  (.fill ctx))

(defn collision? [{px :x py :y pw :w ph :h} {ox :x oy :y ow :w oh :h}]
  "Returns true if the given obstacle (o) has collided with the
   given entity (the player - p). Currently operates on very basic 2D rectangles
   and does not support bounding boxes on rotated shapes."
  (let [p-top (- py (/ ph 2))
        p-bottom (+ py (/ ph 2))
        p-left (- px (/ pw 2))
        p-right (+ px (/ pw 2))]
    (and (< p-left (+ ox ow))
         (< ox p-right)
         (< p-top oy)
         (< (- oy oh) p-bottom))))
