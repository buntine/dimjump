(ns dimjump.platforms.rock
  (:require [quil.core :as q :include-macros true]
            [dimjump.factories.entity :as entity-factory]
            [dimjump.platform :as platform]))

(defmethod entity-factory/entity :rock [opts]
  "Spawns a new platform quadrangle with the appropriate config for a rock wall"
  (platform/map->Platform
    (merge opts
           {:background {:frames [(q/load-image "/images/rock_1.png")]}})))
