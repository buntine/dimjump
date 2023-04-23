(ns dimjump.level
  (:require [dimjump.quadrangle :as quadrangle]
            [dimjump.data :as data]
            [quil.core :as q]))

(defn level-data [kind n]
  (kind (data/levels n)))

(defn reset [{:keys [initial] :as level}]
  "(Re)sets the level time limit in milliseconds."
  (assoc level :time (* (:time initial) 1000)))

(defn spawn [n entity-factory]
  (let [initial (level-data :initial n)]
    (reset {:index n
            :initial initial
            :quadrangles (concat
                           (map entity-factory
                                (level-data :platforms n))
                           (map entity-factory
                                (level-data :obstacles n))
                           (map entity-factory
                                (level-data :exits n)))})))

(defn draw [{:keys [quadrangles]}]
  (doseq [e quadrangles]
    (quadrangle/draw e)))

(defn progress [level]
  (-> level 
      (update :quadrangles (partial map quadrangle/progress))
      (update :time #(max 0
                          (- % (/ 1000 (q/current-frame-rate)))))))

(defn collided-entities [{:keys [quadrangles]} position]
  "Returns a collection representing the quadrangles that the given positional has hit.
   The structure is: [[entity, direction], ...]"
  (remove
    nil?
    (map
      (fn [o]
        (when-let [c (quadrangle/collision o position)]
          [o c]))
      quadrangles)))

(defn last? [{:keys [index]}]
  (>= (inc index) (count data/levels)))

(defn move-next [{:keys [index] :as level} entity-factory]
  (let [next-level (if (last? level) 0 (inc index))]
    (spawn next-level entity-factory)))

(defn out-of-time? [{:keys [time]}]
  (<= time 0))
