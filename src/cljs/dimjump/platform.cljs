(ns dimjump.platform
  (:require [quil.core :as q :include-macros true]))

(defn spawn [opts]
  opts)

(defn draw [{:keys [x w h y]} ctx]
  (.beginPath ctx)
  (.rect ctx x (- y h) w h)
  (.closePath ctx)
  (.fill ctx))

(defn collision? [{px :x py :y pw :w ph :h} {ox :x oy :y ow :w oh :h}]
  "Returns true if the given platform (o) has collided with the
   given entity (the player - p). Currently operates on very basic 2D rectangles
   and does not support bounding boxes on rotated shapes."
  (let [py-top (- py (/ ph 2))
        py-bottom (+ py (/ ph 2))
        px-left (- px (/ pw 2))
        px-right (+ px (/ pw 2))]
    (and (< px-left (+ ox ow))
         (< ox px-right)
         (< py-top oy)
         (< (- oy oh) py-bottom))))
