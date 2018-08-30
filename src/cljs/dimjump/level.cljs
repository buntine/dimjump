(ns dimjump.level
  (:require [quil.core :as q :include-macros true]))

(defn block [x w h]
  {:x x :w w :h h})

(def level-data
  [[(block 200 20 20)
    (block 400 20 20)]
   [(block 300 20 20)
    (block 500 20 20)
    (block 600 20 20)]])

(defn draw [state]
  (let [level (get-in state [:dim :level])]
    (q/with-fill
      [178 145 116]
        (doseq [{x :x w :w h :h} (nth level-data level)]
          (q/rect x
                  (- (:floor-y state) h)
                  w
                  h)))))

(defn collision? [state]
  false)
