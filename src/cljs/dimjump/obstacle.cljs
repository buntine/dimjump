(ns dimjump.obstacle
  (:require [quil.core :as q :include-macros true]
            [dimjump.sound :as sound]
            [dimjump.dim :as dim]
            [dimjump.position :as position]
            [dimjump.corpse :as corpse]
            [dimjump.blood :as blood]
            [dimjump.object :as object]))

(defn create-blood-splatter [{:keys [speed] :as dim}]
  (let [position (position/pos dim)]
    (map
      #(blood/spawn (merge position {:velocity % :speed speed}))
      (range -20 -2))))

(defrecord Obstacle
  [x y w h min-x max-y min-y speed move-x move-y]
  object/Entity

  (draw [_ ctx]
    (.beginPath ctx)
    (.rect ctx x (- y h) w h)
    (.closePath ctx)
    (.fill ctx))

  (on-collision [_ _ {:keys [sound dim level] :as state}]
    (if sound
      (sound/play-sound :splat))
    (let [sprite (dim/sprite-for dim)
          position (position/pos dim)]
      (-> state
          (update :corpses conj (corpse/spawn position sprite))
          (update :blood concat (create-blood-splatter dim))
          (update :dim dim/kill (:initial level))))))
