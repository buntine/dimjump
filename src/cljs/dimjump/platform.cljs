(ns dimjump.platform
  (:require [quil.core :as q :include-macros true]
            [dimjump.quadrangle :as quadrangle]
            [dimjump.coordinate :as coordinate]
            [dimjump.dim :as dim]
            [dimjump.data :as data :refer [constants]]))

(defrecord Platform
  [id x y w h min-x max-y min-y speed move-x move-y fade-cycle bounce? gravity]
  quadrangle/Quadrangle

  (draw [{:keys [fade-cycle bounce?]}]
    (let [{:keys [alpha]
           :or {alpha 255}} fade-cycle
          bg-color (constants (if bounce? :trampoline-color :platform-color))]
      (q/with-fill (conj bg-color alpha)
        (q/rect x (- y h) w h))

      (q/with-fill (conj (constants :grass-color) alpha)
        (q/rect x (- y h) w (constants :grass-height)))))

  (on-collision [entity direction state]
    (case direction
      :top (update state :dim dim/collide-with-platform entity)
      :left (update state :dim coordinate/apply-x-block x :left)
      :right (update state :dim coordinate/apply-x-block (+ x w) :right)
      :bottom (update state :dim dim/halt-jump)
      :inside state)))
