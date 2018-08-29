(ns dimjump.dim
  (:require [quil.core :as q :include-macros true]))

(defn initial-state [load-image]
  {:x 0
   :y 0
   :frames [(load-image "/images/dim1.png")
            (load-image "/images/dim2.png")]
   :ducking false
   :speed 3,
   :animation-speed 12})

(defn accellerate [dim]
  (update dim :x #(+ (:speed dim) %)))

(defn toggle-duck [state]
  (update state [:dim :ducking] not))

(defn progress [state]
  "Receives full game state and returns next state"
  (assoc state
         :dim
         (->
           (:dim state)
           accellerate)))

(defn frame-for [frame, state]
  "Returns the PImage suitable for the given frame number"
  ((:frames state) (mod (int (/ frame (:animation-speed state))) 2)))

(defn draw [state]
  (let [dim (:dim state)]
    (q/image (frame-for (:frame state) dim)
             (:x dim)
             30)))
