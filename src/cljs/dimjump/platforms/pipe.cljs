(ns dimjump.platforms.pipe
  (:require [quil.core :as q :include-macros true]
            [dimjump.data :as data :refer [constants]]
            [dimjump.factories.entity :as entity-factory]
            [dimjump.platform :as platform]))

(defmethod entity-factory/entity :pipe [{:keys [rotation] :as opts :or {rotation 0}}]
  "Spawns a new platform quadrangle with the appropriate config for a length of pipe"
  (platform/map->Platform
    (merge (dissoc opts :rotation)
           {:fall {:velocity 0}
            :background {:background [100 100 100]
                         :layers []
                         :stub ["pipe_edge_l" "pipe_edge_r" (- (:tile-size constants))]
                         :rotation rotation
                         :frames ["pipe_1"]}})))
