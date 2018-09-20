(ns dimjump.data
  (:require [quil.core :as q :include-macros true]))

(def text
  (memoize (fn [size]
             (q/create-font "AddStandard" size))))

(def dimensions {:w 900 :h 200})

(def constants
  {:floor-y (* 0.70 (:h dimensions))
   :w (:w dimensions)
   :h (:h dimensions)
   :speed-range (set (range 2 7))
   :velocity-big -10
   :velocity-small -8
   :gravity 0.8})

(defn block
  ([x w h] (block x w h {}))
  ([x w h {:keys [y min-x max-x min-y max-y]
           :or {y 0 min-x x max-x x min-y y max-y y}
           :as opts}]
    (let [floor-y (:floor-y constants)]
      (merge opts
             {:x x :w w
              :min-x min-x
              :max-x max-x
              :min-y (+ floor-y min-y)
              :max-y (+ floor-y max-y)
              :h h
              :y (+ floor-y y)}))))

(def levels
  [[(block 200 20 20)
    (block 400 20 30)
    (block 600 30 20 {:min-x 550 :max-x 600 :min-y -30 :max-y 0 :speed 1.0})]
   [(block 160 20 20)
    (block 360 20 20)
    (block 500 20 20)
    (block 660 100 10 {:y -27})]
   [(block 120 20 20)
    (block 300 20 20)
    (block 400 20 20)
    (block 520 20 30)
    (block 700 35 15)]
   [(block 115 8 8)
    (block 123 8 8 {:y -8})
    (block 131 8 8 {:y -16})
    (block 139 8 8 {:y -8})
    (block 147 8 8)
    (block 220 37 9)
    (block 350 25 25)
    (block 420 90 7 {:y -27})
    (block 510 100 7 {:y -17})
    (block 610 90 7 {:y -27})
    (block 740 20 20)]
   [(block 110 20 20)
    (block 200 20 20)
    (block 290 20 20)
    (block 350 100 5 {:y -27})
    (block 490 35 12)
    (block 600 20 40)
    (block 740 20 30)]
   [(block 120 140 8 {:y -17})
    (block 325 32 31)
    (block 420 200 12 {:y -27})
    (block 646 20 20)]
   [(block 120 500 5 {:y -27})
    (block 660 30 20)
    (block 760 30 20)]
   [(block 120 20 20)
    (block 190 20 20)
    (block 260 20 20)
    (block 330 20 20)
    (block 400 20 20)
    (block 490 20 20)
    (block 560 20 20)
    (block 630 20 20)
    (block 700 20 20)
    (block 770 20 20)]
  ])
