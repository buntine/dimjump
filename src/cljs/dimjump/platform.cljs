(ns dimjump.platform
  (:require [quil.core :as q :include-macros true]
            [dimjump.quadrangle :as quadrangle]
            [dimjump.coordinate :as coordinate]
            [dimjump.dim :as dim]
            [dimjump.data :as data :refer [constants]]))

(defrecord Platform
  [id x y w h min-x max-y min-y speed move-x move-y fade-cycle bounce? gravity background activated]
  quadrangle/Quadrangle

  (draw [{:keys [fade-cycle background bounce?]}]
    (let [{:keys [alpha]
           :or {alpha 255}} fade-cycle
          {:keys [frames layers stub rotation]} background
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

      (when stub
        (let [[l r offset] stub
              l-img (.getElementById js/document l)
              r-img (.getElementById js/document r)]
          (.drawImage ctx l-img (- x (:tile-size constants) offset) y-pos)
          (.drawImage ctx r-img (+ x w offset) y-pos)))

      (set! (.-globalAlpha ctx) 255)))

  (on-collision [entity direction state]
    (case direction
      :top (let [next-state (update state :dim dim/collide-with-platform entity)]
             (if (not activated)
               (update-in next-state [:level :quadrangles] quadrangle/initiate-quadrangle id)
               next-state))
      :left (update state :dim coordinate/apply-x-block x :left)
      :right (update state :dim coordinate/apply-x-block (+ x w) :right)
      :bottom (update state :dim dim/halt-jump)
      :inside state)))
