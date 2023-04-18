(ns dimjump.level
  (:require [dimjump.object :as object]
            [dimjump.data :as data]
            [quil.core :as q]))

(defn level-data [kind n]
  (kind (data/levels n)))

(defn reset [{:keys [initial] :as level}]
  "(Re)sets the level time limit in milliseconds."
  (assoc level :time (* (:time initial) 1000)))

(defn spawn [n platform-factory obstacle-factory exit-factory]
  (let [initial (level-data :initial n)]
    (reset {:index n
            :initial initial
            :objects (concat
                       (map platform-factory
                            (level-data :platforms n))
                       (map obstacle-factory
                            (level-data :obstacles n))
                       (map exit-factory
                            (level-data :exits n)))})))

(defn draw [{:keys [objects]}]
  (doseq [e objects]
    (object/draw e)))

(defn progress [level]
  (-> level 
      (update :objects (partial map object/progress))
      (update :time #(max 0
                          (- % (/ 1000 (q/current-frame-rate)))))))

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

(defn move-next [{:keys [index] :as level} platform-factory obstacle-factory exit-factory]
  (let [next-level (if (last? level) 0 (inc index))]
    (spawn next-level platform-factory obstacle-factory exit-factory)))

(defn out-of-time? [{:keys [time]}]
  (<= time 0))
