(ns dimjump.object
  (:require [quil.core :as q :include-macros true]))

(defn spawn [kind {:keys [speed] :or {speed 0} :as opts}]
  (merge {:kind kind
          :move-x (- speed)
          :move-y (- speed)}
         opts))

(defn next-x [{:keys [x min-x max-x move-x]}]
  (max min-x (min max-x (+ x move-x))))

(defn next-y [{:keys [y min-y max-y move-y]}]
  (max min-y (min max-y (+ y move-y))))

(defn moving? [{:keys [move-x move-y]}]
  (not (and (= move-x 0) (= move-y 0))))

(defn next-move [p min-p max-p move]
  "Inverts the movement factor when a moving object hits it's min
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

(defn progress [object]
  "Updates position based on min-x and min-y, if necessary"
  (assoc object
         :x (next-x object)
         :y (next-y object)
         :move-x (next-move-x object)
         :move-y (next-move-y object)))
