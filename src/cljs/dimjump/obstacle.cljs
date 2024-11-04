(ns dimjump.obstacle
  (:require [quil.core :as q :include-macros true]
            [dimjump.sound :as sound]
            [dimjump.dim :as dim]
            [dimjump.coordinate :as coordinate]
            [dimjump.corpse :as corpse]
            [dimjump.blood :as blood]
            [dimjump.quadrangle :as quadrangle]
            [dimjump.level :as level]
            [dimjump.data :as data :refer [constants]]))

(defn create-blood-splatter [{:keys [speed] :as dim}]
  (let [position (coordinate/pos dim)]
    (map
      #(blood/spawn (merge position
                           {:velocity (max (:blood-velocity constants) (- (rand-int %) 5))
                            :speed speed}))
      (range (:blood-particles constants) 0))))

(defrecord Obstacle
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

  (on-collision [_ _ {:keys [sound dim level] :as state}]
    (if sound
      (sound/play-sound :splat))
    (let [sprite (dim/sprite-for dim)
          position (coordinate/pos dim)]
      (-> state
          (update :corpses conj (corpse/spawn position sprite))
          (update :blood concat (create-blood-splatter dim))
          (update :dim dim/kill (:initial level))
          (update :level level/reset-platforms)))))
