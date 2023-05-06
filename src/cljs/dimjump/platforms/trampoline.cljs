(ns dimjump.platforms.trampoline
  (:require [quil.core :as q :include-macros true]
            [dimjump.factories.entity :as entity-factory]
            [dimjump.platform :as platform]))

(defmethod entity-factory/entity :trampoline [{:keys [rotation] :as opts :or {rotation 0}}]
  "Spawns a new platform quadrangle with the appropriate config for a trampoline on a rock wall"
  (platform/map->Platform
    (merge (dissoc opts :rotation)
           {:bounce? true
            :background {:background [100 100 100]
                         :layers [{:img "trampoline_1" :y -4}]
                         :rotation rotation
                         :frames ["rock_1"]}})))
