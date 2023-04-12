(ns dimjump.level
  (:require [dimjump.obstacle :as obstacle]
            [dimjump.platform :as platform]
            [dimjump.exit :as exit]
            [dimjump.object :as object]
            [dimjump.data :as data]))

(defn level-data [kind n]
  (kind (data/levels n)))

(defn spawn [n]
  {:index n
   :initial (level-data :initial n)
   :objects (concat
              (map platform/map->Platform
                   (level-data :platforms n))
              (map obstacle/map->Obstacle
                   (level-data :obstacles n))
              (map exit/map->Exit
                   (level-data :exits n)))})

(defn draw [{:keys [objects]}]
  ; Due to a bug surrounding textures in Quil/Processing.js, I've had to resort
  ; dropping down to vanilla JS in order to draw obstacles with textured background.
  (let [canvas (.getElementById js/document  "game")
        ctx (.getContext canvas "2d")
        brick-img (.getElementById js/document "brick")
        pattern (.createPattern ctx brick-img "repeat")]

    (set! (.-fillStyle ctx) pattern)

    (doseq [e objects]
      (object/draw e ctx)
      (set! (.-fillStyle ctx) pattern)))) ; with-fill isn't working so let's just force it back to the pattern fill
                                          ; after each platform is painted.

(defn progress [level]
  (update level :objects (partial map object/progress)))

(defn collided-entities [{:keys [objects]} position]
  "Returns the object that the given entity has hit. Or nil if there is
   no collision."
    (filter
      #(object/collision? % position)
      objects))

(defn last? [{:keys [index]}]
  (>= (inc index) (count data/levels)))

(defn move-next [{:keys [index] :as level}]
  (let [next-level (if (last? level) 0 (inc index))]
    (spawn next-level)))
