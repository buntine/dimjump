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
        brick-img (.getElementById js/document "brick")
        pattern (.createPattern ctx brick-img "repeat")]

    (set! (.-fillStyle ctx) pattern)

    (doseq [p ps]
      (platform/draw p ctx)
      (set! (.-fillStyle ctx) pattern)) ; with-fill isn't working so let's just force it back to the pattern fill
                                        ; after each platform is painted.

    (doseq [o os]
      (obstacle/draw o ctx))))

(defn progress [level]
  (update level :objects (partial map obstacle/progress)))

(defn collided-object [collision-fn objects-fn level entity]
  "Returns the object that the given entity has hit. Or nil if there is
   no collision.
     - objects-fn must return the set of objects that can be collided with.
     - collision-fn is the collision detection function used."
  (first
    (filter
      (partial collision-fn entity)
      (objects-fn level))))

(def collided-platform (partial collided-object platform/collision? platforms))
(def collided-obstacle (partial collided-object obstacle/collision? #(:objects %)))

(defn last? [{:keys [index]}]
  (>= (inc index) (count data/levels)))

(defn move-next [{:keys [index] :as level}]
  (let [next-level (if (last? level) 0 (inc index))]
    (spawn next-level)))
