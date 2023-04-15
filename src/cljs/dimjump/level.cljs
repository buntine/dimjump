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
  (doseq [e objects]
    (object/draw e)))

(defn progress [level]
  (update level :objects (partial map object/progress)))

(defn collided-entities [{:keys [objects]} position]
  "Returns a collection representing the objects that the given positional has hit.
   The structure is: [[entity, direction], ...]"
  (remove
    nil?
    (map
      (fn [o]
        (when-let [c (object/collision o position)]
          [o c]))
      objects)))

(defn last? [{:keys [index]}]
  (>= (inc index) (count data/levels)))

(defn move-next [{:keys [index] :as level}]
  (let [next-level (if (last? level) 0 (inc index))]
    (spawn next-level)))
