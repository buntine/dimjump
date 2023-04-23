(ns dimjump.factories.entity)
 
(defmulti entity (fn [opts]
                   (:kind opts)))
