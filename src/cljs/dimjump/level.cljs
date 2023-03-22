(ns dimjump.level
  (:require [dimjump.obstacle :as obstacle]
            [dimjump.platform :as platform]
            [dimjump.data :as data :refer [constants]]))

(defn spawn [n]
  {:index n
   :obstacles (map obstacle/spawn
                   (obstacles n))
   :platforms (map platform/spawn
                   (platforms n))})

(defn obstacles [n]
  (:obstacles (data/levels n)))

(defn platforms [n]
  (:platforms (data/levels n)))

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

(defn progress [level]
  (update level :obstacles (partial map obstacle/progress)))

(defn collided-obstacle [{:keys [obstacles]} entity]
  "Returns the obstacle that the given entity has hit. Or nil if there is
   no collision"
  (first
    (filter
      (partial obstacle/collision? entity)
      obstacles)))

(defn last? [{:keys [index]}]
  (>= (inc index) (count data/levels)))

(defn move-next [{:keys [index] :as level}]
  (let [next-level (if (last? level) 0 (inc index))]
    (spawn next-level)))
