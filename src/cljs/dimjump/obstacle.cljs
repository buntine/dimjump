(ns dimjump.obstacle
  (:require [quil.core :as q :include-macros true]
            [dimjump.data :as data :refer [constants]]))

(defn spawn [{:keys [speed] :or {speed 0} :as opts}]
  (merge {:min-x 0
          :max-x 0
          :min-y 0
          :max-y 0
          :move-x (- speed)
          :move-y (- speed)}
         opts))

(defn draw [{:keys [x w h y]} ctx]
  (let [floor-y (:floor-y constants)]
    (.beginPath ctx)
    (.rect ctx x (- y h) w h)
    (.closePath ctx)
    (.fill ctx)))

(defn progress [obstacle]
  "Updates position based on min-x and min-y, if necessary"
  obstacle)

(defn collision? [{px :x py :y pw :w ph :h} {ox :x oy :y ow :w oh :h}]
  "Returns true if any obstacle in the level has collided with the
   given entity (the player). Currently operates on very basic 2D rectangles
   and does not support bounding boxes on rotated shapes."
  (let [py-top (- py (/ ph 2))
        py-bottom (+ py (/ ph 2))
        px-left (- px (/ pw 2))
        px-right (+ px (/ pw 2))]
    (and (< px-left (+ ox ow))
         (< ox px-right)
         (< py-top oy)
         (< (- oy oh) py-bottom))))
