(ns dimjump.platforms.rock
  (:require [quil.core :as q :include-macros true]
            [dimjump.factories.entity :as entity-factory]
            [dimjump.platform :as platform]))

(defmethod entity-factory/entity :rock [{:keys [rotation] :as opts :or {rotation 0}}]
  "Spawns a new platform quadrangle with the appropriate config for a rock wall"
  (platform/map->Platform
    (merge (dissoc opts :rotation)
           {:background {:background [100 100 100]
                         :layers [{:img "rock_top_1" :y 0}]
                         :stub ["rock_edge_l" "rock_edge_r" 0]
                         :rotation rotation
                         :frames ["rock_1"]}})))
