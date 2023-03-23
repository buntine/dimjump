(ns dimjump.level
  (:require [dimjump.obstacle :as obstacle]
            [dimjump.platform :as platform]
            [dimjump.data :as data]))

(defn obstacle-data [n]
  (:obstacles (data/levels n)))

(defn platform-data [n]
  (:platforms (data/levels n)))

(defn spawn [n]
  {:index n
   :objects (concat
              (map obstacle/spawn
                   (obstacle-data n))
              (map platform/spawn
                   (platform-data n)))})

(defn obstacles [{:keys [objects]}]
  (filter #(= (:kind %) :obstacle) objects))

(defn platforms [{:keys [objects]}]
  (filter #(= (:kind %) :platform) objects))

(defn draw [level]
  ; Due to a bug surrounding textures in Quil/Processing.js, I've had to resort
  ; dropping down to vanilla JS in order to draw obstacles with textured background.
  (let [os (obstacles level)
        ps (platforms level)
        canvas (.getElementById js/document  "game")
        ctx (.getContext canvas "2d")
        img (.getElementById js/document "brick")
        pattern (.createPattern ctx img "repeat")]

    (set! (.-fillStyle ctx) pattern)

    (doseq [p ps]
      (platform/draw p ctx)
      (set! (.-fillStyle ctx) pattern)) ; with-fill isn't working so let's just force it back to the pattern fill
                                        ; after each platform is painted.

    (doseq [o os]
      (obstacle/draw o ctx))))

(defn progress [level]
  (update level :objects (partial map obstacle/progress)))

(defn collided-obstacle [{:keys [objects]} entity]
  "Returns the obstacle that the given entity has hit. Or nil if there is
   no collision"
  (first
    (filter
      (partial obstacle/collision? entity)
      objects)))

(defn last? [{:keys [index]}]
  (>= (inc index) (count data/levels)))

(defn move-next [{:keys [index] :as level}]
  (let [next-level (if (last? level) 0 (inc index))]
    (spawn next-level)))
