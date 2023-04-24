(ns dimjump.exits.sign
  (:require [quil.core :as q :include-macros true]
            [dimjump.factories.entity :as entity-factory]
            [dimjump.exit :as exit]))

(defmethod entity-factory/entity :sign [opts]
  "Spawns a new exitplatform quadrangle with the appropriate config for an Exit Sign"
  (exit/map->Exit
    (merge opts
           {:background {:frames [(q/load-image "/images/exit_sign_1.png")]}})))
