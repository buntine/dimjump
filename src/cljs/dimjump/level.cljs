(ns dimjump.level
  (:require [dimjump.quadrangle :as quadrangle]
            [dimjump.data :as data]
            [quil.core :as q]))

(defn level-data [kind n]
  (kind (data/levels n)))

(defn reset-time [{:keys [initial] :as level}]
  "(Re)sets the level time limit in milliseconds."
  (assoc level :time (* (:time initial) 1000)))

(defn reset-platforms [{:keys [quadrangles] :as level}]
  "Resets the platforms back to their original positions if they are configured to do so."
  (letfn [(reset-platform [{:keys [disabled resettable initial] :as platform :or {disabled false resettable false}}]
            (if (and disabled resettable)
              (assoc platform
                     :x (:x initial)
                     :y (:y initial)
                     :disabled false)
              platform))]
    (update level
            :quadrangles
            (partial map reset-platform))))

(defn spawn [n entity-factory]
  (let [initial (level-data :initial n)
        level {:index n
               :initial initial
               :quadrangles (concat
                              (map entity-factory
                                   (level-data :platforms n))
                              (map entity-factory
                                   (level-data :obstacles n))
                              (map entity-factory
                                   (level-data :exits n)))}]
    (reset-time level)))

(defn draw [{:keys [quadrangles]}]
  (doseq [e quadrangles]
    (quadrangle/draw e)))

(defn progress [level]
  (-> level 
      (update :quadrangles (partial map quadrangle/progress))
      (update :quadrangles (partial map quadrangle/kill))
      (update :time #(max 0
                          (- % (/ 1000 (q/current-frame-rate)))))))

(defn collided-entities
  ([l p] (collided-entities l p nil))
  ([{:keys [quadrangles]} position current-platform]
  "Returns a collection representing the quadrangles that the given positional has hit.
   The structure is: [[entity, direction], ...]"
  (remove
    nil?
    (map
      (fn [o]
        (when-let [c (quadrangle/collision o position current-platform)]
          [o c]))
      quadrangles))))

(defn last? [{:keys [index]}]
  (>= (inc index) (count data/levels)))

(defn move-next [{:keys [index] :as level} entity-factory]
  (let [next-level (if (last? level) 0 (inc index))]
    (spawn next-level entity-factory)))

(defn out-of-time? [{:keys [time]}]
  (<= time 0))
