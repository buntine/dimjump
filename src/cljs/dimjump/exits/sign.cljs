(ns dimjump.exits.sign
  (:require [quil.core :as q :include-macros true]
            [dimjump.factories.entity :as entity-factory]
            [dimjump.exit :as exit]))

(defmethod entity-factory/entity :sign [{:keys [rotation] :as opts :or {rotation 0}}]
  "Spawns a new exitplatform quadrangle with the appropriate config for an Exit Sign"
  (exit/map->Exit
    (merge (dissoc opts :rotation)
           {:background {:background [100 100 100]
                         :layers []
                         :rotation rotation
                         :frames [(q/load-image "/images/exit_sign_1.png")]}})))
