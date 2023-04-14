(ns dimjump.platform
  (:require [quil.core :as q :include-macros true]
            [dimjump.object :as object]
            [dimjump.position :as position]
            [dimjump.dim :as dim]
            [dimjump.data :as data :refer [constants]]))

(defrecord Platform
  [x y w h min-x max-y min-y speed move-x move-y]
  object/Entity

  (draw [_ ctx]
    (.beginPath ctx)
    (.rect ctx x (- y h) w h)
    (.closePath ctx)
    (.fill ctx)

    (q/with-fill (constants :grass-color)
      (q/rect x (- y h) w (constants :grass-height))))

  (on-collision [entity direction state]
    (println direction)
    (case direction
      :top (update state :dim dim/collide-with-platform entity)
      :left (update state :dim position/apply-x-block x :left)
      :right (update state :dim position/apply-x-block (+ x w) :right)
      :bottom (update state :dim dim/halt-jump)
      :inside state)))
