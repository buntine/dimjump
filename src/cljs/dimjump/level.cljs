(ns dimjump.level
  (:require [dimjump.obstacle :as obstacle]
            [dimjump.data :as data :refer [constants]]))

(defn spawn [n]
  {:index n
   :obstacles (map obstacle/spawn
                   (data/levels n))})

(defn draw [level]
  ; Due to a bug surrounding textures in Quil/Processing.js, I've had to resort
  ; dropping down to vanilla JS in order to draw obstacles with textured background.
  (let [obstacles (:obstacles level)
        canvas (.getElementById js/document  "game")
        ctx (.getContext canvas "2d")
        img (.getElementById js/document "brick")
        pattern (.createPattern ctx img "repeat")]

    (set! (.-fillStyle ctx) pattern)

    (doseq [o obstacles]
      (obstacle/draw o ctx))))

(defn collided? [level entity]
  "Returns true if entity has collided with an obstacle in the
   current level"
  (some (partial obstacle/collision? entity)
        (:obstacles level)))

(defn move-next [{:keys [index]}]
  (spawn (+ index 1)))
