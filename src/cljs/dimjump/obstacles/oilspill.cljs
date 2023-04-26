(ns dimjump.obstacles.oilspill
  (:require [quil.core :as q :include-macros true]
            [dimjump.factories.entity :as entity-factory]
            [dimjump.obstacle :as obstacle]))

(defmethod entity-factory/entity :oilspill [{:keys [rotation] :as opts :or {rotation 0}}]
  "Spawns a new obstacle quadrangle with the appropriate config for an Oil spill."
  (obstacle/map->Obstacle
    (merge (dissoc opts :rotation)
           {:background {:color [59 219 54]
                         :layers []
                         :rotation rotation
                         :frames [(q/load-image "/images/oilspill_1.png")
                                  (q/load-image "/images/oilspill_2.png")]}})))
