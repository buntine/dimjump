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

(defn collision? [state]
  false)
