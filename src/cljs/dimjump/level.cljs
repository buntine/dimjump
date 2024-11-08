(ns dimjump.level
  (:require [dimjump.quadrangle :as quadrangle]
            [dimjump.data :as data]
            [quil.core :as q]))

(defn level-data [kind n]
  (kind (data/levels n)))

(defn reset-time [{:keys [initial] :as level}]
  "(Re)sets the level time limit in milliseconds."
  (assoc level :time (* (:time initial) 1000)))

(defn reset-phase [level]
  "Sets the level phase back to zero. Levels can have multiple phases, in which certain
   platforms are only visible on particulat phases."
  (assoc level :current-phase 0))

(defn platforms-for-phase [{:keys [quadrangles current-phase] :as level}]
  "Enables/disables platforms relative to the current level phase."
  (letfn [(inspect-platform [{:keys [phase] :as platform}]
            (assoc platform :disabled (> phase current-phase)))]
    (update level
            :quadrangles
            (partial map inspect-platform))))

(defn reset-platforms [{:keys [quadrangles] :as level}]
  "Resets the platforms back to their original positions if they are configured to do so."
  (letfn [(reset-platform [{:keys [disabled resettable initial] :as platform :or {disabled false resettable false}}]
            (if (and disabled resettable)
              (assoc platform
                     :x (:x initial)
                     :y (:y initial))
              platform))]
    (-> level
        (update :quadrangles (partial map reset-platform))
        platforms-for-phase)))

(defn spawn [n entity-factory]
  (let [initial (level-data :initial n)
        level {:index n
               :initial initial
               :current-phase (level-data :current-phase n)
               :quadrangles (concat
                              (map entity-factory
                                   (level-data :platforms n))
                              (map entity-factory
                                   (level-data :obstacles n))
                              (map entity-factory
                                   (level-data :exits n)))}]
    (-> level
        reset-time
        platforms-for-phase)))

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
