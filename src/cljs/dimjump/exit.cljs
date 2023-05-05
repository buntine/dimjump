(ns dimjump.exit
  (:require [quil.core :as q :include-macros true]
            [dimjump.quadrangle :as quadrangle]
            [dimjump.data :as data :refer [constants]]))

(defrecord Exit
  [id x y w h min-x max-y min-y speed move-x move-y fade-cycle background]
  quadrangle/Quadrangle

  (draw [{:keys [fade-cycle background]}]
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

  (on-collision [_ _ state]
    (assoc state :phase 1)))
