(ns dimjump.exit
  (:require [quil.core :as q :include-macros true]
            [dimjump.object :as object]
            [dimjump.data :as data :refer [constants]]))

(defrecord Exit
  [x y w h min-x max-y min-y speed move-x move-y fade-cycle]
  object/Entity

  (draw [_]
    (q/with-fill (constants :exit-color)
      (q/rect x (- y h) w h)))

  (on-collision [_ _ state]
    (assoc state :phase 1)))
