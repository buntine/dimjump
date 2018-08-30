(ns dimjump.dim
  (:require [quil.core :as q :include-macros true]))

(defn initial-state [y load-image]
  {:x 0
   :y y
   :v 0
   :level 0
   :deaths 0
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

(defn reset [state]
  (-> state
    (assoc-in [:dim :x] 0)
    end-jump))

(defn accellerate [state]
  (let [dim (:dim state)]
    (update-in state [:dim :x] #(+ (:speed dim) %))))

(defn start-jump [state]
  (let [dim (:dim state)]
    (if (:jumping dim)
      state
      (let [velocity (if (:ducking dim)
                       (:velocity-small state)
                       (:velocity-big state))]
        (-> state
            toggle-jump
            (assoc-in [:dim :v] velocity))))))

(defn end-jump [state]
  (-> state
      toggle-jump
      (assoc-in [:dim :y] (:floor-y state))))

(defn kill [state]
  (-> state
      (update-in [:dim :deaths] inc)
      reset))

(defn progress-jump [state]
  (let [dim (:dim state)
        next-y (+ (:y dim) (:v dim))]
    (if (:jumping dim)
      (if (>= next-y (:floor-y state))
        (end-jump state)
        (-> state
            (assoc-in [:dim :y] next-y)
            (update-in [:dim :v] + (:gravity state))))
      state)))

(defn next-level [state]
  (-> state
      (update-in [:dim :level] inc)
      reset))

(defn progress-level [state]
  (let [dim (:dim state)]
    (if (>= (:x dim) (:w state))
      (next-level state)
      state)))

(defn progress [state]
  "Receives full game state and returns next state"
  (->
    state
    accellerate
    progress-jump
    progress-level))

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
