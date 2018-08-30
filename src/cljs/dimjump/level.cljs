(ns dimjump.level
  (:require [quil.core :as q :include-macros true]))

(defn draw [state]
  (let [level (get-in state [:dim :level])]
    (q/with-fill
      [178 145 116]
        (doseq [{x :x w :w h :h} (get-in state [:levels level])]
          (q/rect x
                  (- (:floor-y state) h)
                  w
                  h)))))

(defn collision? [obstacles, entity]
  "Returns true if any obstacle in the level has collided
   with the given entity (the player)"
  false)
