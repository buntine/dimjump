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
      #(blood/spawn (merge position {:velocity % :speed speed}))
      (range -20 -2))))

(defrecord Obstacle
  [x y w h min-x max-y min-y speed move-x move-y fade-cycle]
  quadrangle/Quadrangle

  (draw [{:keys [fade-cycle]}]
    (let [{:keys [alpha]
           :or {alpha 255}} fade-cycle]
      (q/with-fill (conj (constants :obstacle-color) alpha)
        (q/rect x (- y h) w h))))

  (on-collision [_ _ {:keys [sound dim level] :as state}]
    (if sound
      (sound/play-sound :splat))
    (let [sprite (dim/sprite-for dim)
          position (coordinate/pos dim)]
      (-> state
          (update :corpses conj (corpse/spawn position sprite))
          (update :blood concat (create-blood-splatter dim))
          (update :dim dim/kill (:initial level))
          (update :level level/reset)))))
