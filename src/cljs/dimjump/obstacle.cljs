(ns dimjump.obstacle
  (:require [quil.core :as q :include-macros true]
            [dimjump.sound :as sound]
            [dimjump.dim :as dim]
            [dimjump.position :as position]
            [dimjump.corpse :as corpse]
            [dimjump.blood :as blood]
            [dimjump.object :as object]))

(defrecord Obstacle
  [x y w h min-x max-y min-y speed move-x move-y]
  object/Entity

  (draw [_ ctx]
    (.beginPath ctx)
    (.rect ctx x (- y h) w h)
    (.closePath ctx)
    (.fill ctx))

  (collision? [_ {px :x py :y pw :w ph :h}]
  "Returns true if the given obstacle (o) has collided with the
   given entity (the player - p). Currently operates on very basic 2D rectangles
   and does not support bounding boxes on rotated shapes."
  (let [p-top (- py (/ ph 2))
        p-bottom (+ py (/ ph 2))
        p-left (- px (/ pw 2))
        p-right (+ px (/ pw 2))]
    (and (< p-left (+ x w))
         (< x p-right)
         (< p-top y)
         (< (- y h) p-bottom))))
  
  (on-collision [_ {:keys [sound dim level] :as state}]
    (if sound
      (sound/play-sound :splat))
    (let [sprite (dim/sprite-for dim)
          position (position/pos dim)]
      (-> state
          (update :corpses conj (corpse/spawn position sprite))
          (update :blood concat (create-blood-splatter dim))
          (update :dim dim/kill (:initial level))))))

(defn create-blood-splatter [{:keys [speed] :as dim}]
  (let [position (position/pos dim)]
    (map
      #(blood/spawn (merge position {:velocity % :speed speed}))
      (range -20 -2))))
