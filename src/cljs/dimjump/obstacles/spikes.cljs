(ns dimjump.obstacles.spikes
  (:require [quil.core :as q :include-macros true]
            [dimjump.factories.entity :as entity-factory]
            [dimjump.obstacle :as obstacle]))

(defmethod entity-factory/entity :spikes [{:keys [rotation] :as opts :or {rotation 0}}]
  "Spawns a new obstacle quadrangle with the appropriate config for a row of spikes."
  (obstacle/map->Obstacle
    (merge (dissoc opts :rotation :blood-collision?)
           {:background {:color [59 219 54]
                         :layers []
                         :rotation rotation
                         :blood-collision? false
                         :frames ["spikes_1"]}})))
