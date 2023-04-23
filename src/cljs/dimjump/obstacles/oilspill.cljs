(ns dimjump.obstacles.oilspill
  (:require [quil.core :as q :include-macros true]
            [dimjump.factories.entity :as entity-factory]
            [dimjump.obstacle :as obstacle]))

(defmethod entity-factory/entity :oilspill [opts]
  "Spawns a new obstacle quadrangle with the appropriate config for an Oil spill."
  (obstacle/map->Obstacle
    (merge opts
           {:background {:frames [(q/load-image "/images/oilspill_1.png")
                                  (q/load-image "/images/oilspill_2.png")]}})))
