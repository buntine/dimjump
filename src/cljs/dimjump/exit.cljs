(ns dimjump.exit
  (:require [quil.core :as q :include-macros true]
            [dimjump.quadrangle :as quadrangle]
            [dimjump.data :as data :refer [constants]]))

(defrecord Exit
  [id x y w h min-x max-y min-y speed move-x move-y fade-cycle background]
  quadrangle/Quadrangle

  (draw [{:keys [fade-cycle background bounce?]}]
    (let [{:keys [alpha]
           :or {alpha 255}} fade-cycle
          {:keys [frames layers rotation]} background
          canvas (.getElementById js/document  "game")
          ctx (.getContext canvas "2d")
          bg-img (.getElementById js/document (quadrangle/image-for frames))
          pattern (.createPattern ctx bg-img "repeat")
          matrix (.rotate (js/DOMMatrix. [1 0 0 1 0 0]) rotation)
          y-pos (- y h)]

      (.setTransform pattern matrix)

      (set! (.-fillStyle ctx) pattern)
      (set! (.-globalAlpha ctx) (/ alpha 255))

      (quadrangle/draw-rect ctx x y-pos w h)

      (doseq [{img :img l-y :y} layers]
        (let [l-img (.getElementById js/document img)
              l-pattern (.createPattern ctx l-img "no-repeat")]
          (.setTransform pattern matrix)
          (set! (.-fillStyle ctx) l-pattern)

          (quadrangle/draw-rect ctx x (+ y-pos l-y) w h)))

      (set! (.-globalAlpha ctx) 255)))

  ; NOOP
  (activated-progress [entity]
    entity)

  (kill? [_]
    false)

  (on-collision [_ _ state]
    (assoc state :phase 1)))
