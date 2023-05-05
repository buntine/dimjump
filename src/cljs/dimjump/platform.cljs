(ns dimjump.platform
  (:require [quil.core :as q :include-macros true]
            [dimjump.quadrangle :as quadrangle]
            [dimjump.coordinate :as coordinate]
            [dimjump.dim :as dim]
            [dimjump.data :as data :refer [constants]]))

(defrecord Platform
  [id x y w h min-x max-y min-y speed move-x move-y fade-cycle bounce? gravity background]
  quadrangle/Quadrangle

  (draw [{:keys [fade-cycle background bounce?]}]
    (let [{:keys [alpha]
           :or {alpha 255}} fade-cycle
          {:keys [frames]} background
          canvas (.getElementById js/document  "game")
          ctx (.getContext canvas "2d")
          img (.getElementById js/document (quadrangle/image-for frames))
          pattern (.createPattern ctx img "repeat")]

      (set! (.-fillStyle ctx) pattern)
      (set! (.-globalAlpha ctx) (/ alpha 255))

      (.beginPath ctx)
      (.rect ctx x (- y h) w h)
      (.closePath ctx)
      (.fill ctx)

      (set! (.-globalAlpha ctx) 255)))

  (on-collision [entity direction state]
    (case direction
      :top (update state :dim dim/collide-with-platform entity)
      :left (update state :dim coordinate/apply-x-block x :left)
      :right (update state :dim coordinate/apply-x-block (+ x w) :right)
      :bottom (update state :dim dim/halt-jump)
      :inside state)))
