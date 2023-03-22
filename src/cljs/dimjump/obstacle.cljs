(ns dimjump.obstacle
  (:require [quil.core :as q :include-macros true]))

(defn spawn [{:keys [speed] :or {speed 0} :as opts}]
  (merge {:kind :obstacle
          :move-x (- speed)
          :move-y (- speed)}
         opts))

(defn draw [{:keys [x w h y]} ctx]
  (.beginPath ctx)
  (.rect ctx x (- y h) w h)
  (.closePath ctx)
  (.fill ctx))

(defn next-x [{:keys [x min-x max-x move-x]}]
  (max min-x (min max-x (+ x move-x))))

(defn next-y [{:keys [y min-y max-y move-y]}]
  (max min-y (min max-y (+ y move-y))))

(defn moving? [{:keys [move-x move-y]}]
  (not (and (= move-x 0) (= move-y 0))))

(defn next-move [p min-p max-p move]
  "Inverts the movement factor when a moving obstacle hits it's min
   or max edge on the appropriate axis."
  (if (or
        (and (> move 0) (>= p max-p))
        (and (< move 0) (<= p min-p)))
    (- move)
    move))

(defn next-move-x [{:keys [x min-x max-x move-x]}]
  (next-move x min-x max-x move-x))

(defn next-move-y [{:keys [y min-y max-y move-y]}]
  (next-move y min-y max-y move-y))

(defn obstacle? [{:keys [kind]}]
  (= kind :obstacle))

(defn progress [obstacle]
  "Updates position based on min-x and min-y, if necessary"
  (if (obstacle? obstacle)
    (assoc obstacle
           :x (next-x obstacle)
           :y (next-y obstacle)
           :move-x (next-move-x obstacle)
           :move-y (next-move-y obstacle))
    obstacle))

(defn collision? [{px :x py :y pw :w ph :h} {ox :x oy :y ow :w oh :h}]
  "Returns true if the given obstacle (o) has collided with the
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
