(ns dimjump.platform
  (:require [quil.core :as q :include-macros true]
            [dimjump.object :as object]
            [dimjump.position :as position]
            [dimjump.dim :as dim]
            [dimjump.data :as data :refer [constants]]))

(defrecord Platform
  [x y w h min-x max-y min-y speed move-x move-y fade-cycle]
  object/Entity

  (draw [{:keys [fade-cycle]}]
    (let [{:keys [alpha]
           :or {alpha 255}} fade-cycle]
      (q/with-fill (conj (constants :platform-color) alpha)
        (q/rect x (- y h) w h))

      (q/with-fill (conj (constants :grass-color) alpha)
        (q/rect x (- y h) w (constants :grass-height)))))

  (on-collision [entity direction state]
    (case direction
      :top (update state :dim dim/collide-with-platform entity)
      :left (update state :dim position/apply-x-block x :left)
      :right (update state :dim position/apply-x-block (+ x w) :right)
      :bottom (update state :dim dim/halt-jump)
      :inside state)))
