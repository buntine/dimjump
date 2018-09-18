(ns dimjump.obstacle
  (:require [quil.core :as q :include-macros true]
            [dimjump.data :as data :refer [constants]]))

(defn spawn [{:keys [x offset x-variance y-variance speed]
              :or {x-variance 0 y-variance 0 speed 0}
              :as opts}]
  (let [y (- (:floor-y constants) offset)]
    (merge opts
           {:y y
            :min-x (- x x-variance)
            :max-x x
            :move-x (- speed)
            :min-y (- y y-variance)
            :max-y y
            :move-y (- speed)})))

(defn draw [{:keys [x w h vertices]} ctx]
  (let [floor-y (:floor-y constants)]
    (.beginPath ctx)

    (doseq [[x y] vertices]
      (.lineTo ctx x (+ floor-y y)))

    (.closePath ctx)
    (.fill ctx)))

(defn progress [obstacle]
  "Updates position base on (x/y)-variance, if necessary"
  obstacle)

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
