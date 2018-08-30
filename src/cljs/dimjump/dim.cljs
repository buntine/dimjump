(ns dimjump.dim
  (:require [quil.core :as q :include-macros true]))

(defn initial-state [y load-image]
  {:x 0
   :y y
   :v 0
   :frames {:standing [(load-image "/images/dim1.png")
                       (load-image "/images/dim2.png")]
            :ducking [(load-image "/images/dim3.png")
                      (load-image "/images/dim4.png")]}
   :ducking false
   :jumping false
   :speed 3,
   :animation-speed 12})

(defn toggle-flag [flag]
  (fn [state]
    (update-in state [:dim flag] not)))

(def toggle-duck (toggle-flag :ducking))
(def toggle-jump (toggle-flag :jumping))

(defn accellerate [state]
  (let [dim (:dim state)]
    (update-in state [:dim :x] #(+ (:speed dim) %))))

(defn start-velocity [state]
  (assoc-in state [:dim :v] (:velocity state)))

(defn start-jump [state]
  (if (get-in state [:dim :jumping])
    state
    (->
      state
      toggle-jump
      start-velocity)))

(defn progress-jump [state]
  (let [dim (:dim state)
        y (:y dim)]
    (.log js/console (+ (:v dim) (:gravity state)))
    (if (:jumping dim)
      (if (> y (:floor-y state))
        (toggle-jump state)
        (assoc state
               :dim
               (update dim
                       :y #(+ % (:v dim))
                       :v #(+ % (:gravity state)))))
      state)))

(defn progress [state]
  "Receives full game state and returns next state"
  (->
    state
    accellerate
    progress-jump))

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
             (- (:y dim) (.-height img)))))
