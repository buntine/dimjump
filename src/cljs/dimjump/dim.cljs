(ns dimjump.dim
  (:require [quil.core :as q :include-macros true]))

(defn initial-state [load-image]
  {:x 0
   :y 0
   :frames {:standing [(load-image "/images/dim1.png")
                       (load-image "/images/dim2.png")]
            :ducking [(load-image "/images/dim3.png")
                      (load-image "/images/dim4.png")]}
   :ducking false
   :speed 3,
   :animation-speed 12})

(defn accellerate [dim]
  (update dim :x #(+ (:speed dim) %)))

(defn toggle-duck [state]
  (update-in state [:dim :ducking] not))

(defn progress [state]
  "Receives full game state and returns next state"
  (assoc state
         :dim
         (->
           (:dim state)
           accellerate)))

(defn frame-for [frame, dim]
  "Returns the PImage suitable for the given frame number"
  (let [all-frames (:frames dim)
        frames ((if (:ducking dim) :ducking :standing) all-frames)]
    (frames (mod (int (/ frame (:animation-speed dim))) 2))))

(defn draw [state]
  (let [dim (:dim state)
        img (frame-for (:frame state) dim)]
    (q/image img
             (:x dim)
             (- (:floor-y state) (.-height img)))))
