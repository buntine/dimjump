(ns dimjump.dim
  (:require [quil.core :as q]))

(def initial-state
  {:x 0
   :y 0
   :w 16
   :h 24
   :ducking false
   :speed 3})

(defn progress [state]
  (let [dim (:dim state)]
    (assoc-in state [:dim :x] (+ (:speed dim) (:x dim)))))

(defn draw [state]
  (q/with-fill
    [150 150 150]
    (q/rect (get-in state [:dim :x]) 30 30 30)))
