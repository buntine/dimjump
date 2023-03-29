(ns dimjump.data
  (:require [quil.core :as q :include-macros true]))

(def text
  (memoize (fn [size]
             (q/create-font "AddStandard" size))))

(def dimensions {:w 900 :h 700})

(def constants
  {:w (:w dimensions)
   :h (:h dimensions)
   :speed-range (set (range 0 8))
   :speed-bar-color [158 159 160]
   :speed-block-size 10
   :velocity-big -10
   :velocity-small -8
   :fall-velocity 5
   :gravity 0.8
   :hud-color [10 49 56]
   :exit-color [40 40 40]
   :cover-color [156 215 249 200]
   :grass-height 3
   :grass-color [3 192 74]})

(defn block
  ([x w h] (block x w h {}))
  ([x w h {:keys [y min-x max-x min-y max-y]
           :or {y 0 min-x x max-x x min-y y max-y y}
           :as opts}]
    (merge opts
           {:x x
            :w w
            :min-x min-x
            :max-x max-x
            :min-y (+ (:h constants) min-y)
            :max-y (+ (:h constants) max-y)
            :h h
            :y (+ (:h constants) y)})))

(def levels
  [{:obstacles [(block 200 20 20 {:y -10}) ;0
                (block 400 20 30 {:y -10})
                (block 600 30 20 {:y -10})]
    :platforms [(block 0 500 10)
                (block 530 500 10)
                (block 320 110 10 {:y -50})]
    :exits [(block (- (:w constants) 100) 26 38 {:y -50})]}

   {:obstacles [(block 160 20 20) ;1
                (block 360 20 20)
                (block 500 20 20)
                (block 660 100 10 {:y -27})]
    :platforms []}

   {:obstacles [(block 120 20 20) ;2
                (block 300 20 20)
                (block 400 20 20)
                (block 520 20 30)
                (block 700 35 15)]
    :platforms []}

   {:obstacles [(block 115 8 8)   ;3
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
    :platforms []}

   {:obstacles [(block 110 20 20) ;4
                (block 200 20 20)
                (block 290 20 20)
                (block 350 100 5 {:y -27})
                (block 490 35 12)
                (block 600 20 40)
                (block 740 20 30)]
    :platforms []}

   {:obstacles [(block 120 140 8 {:y -17}) ;5
                (block 325 32 31)
                (block 420 200 12 {:y -27})
                (block 646 20 20)]
    :platforms []}

   {:obstacles [(block 120 500 5 {:y -27}) ;6
                (block 660 30 20)
                (block 760 30 20)]
    :platforms []}

   {:obstacles [(block 100 32 32) ;7
                (block 250 32 32)
                (block 360 10 10)
                (block 420 10 10)
                (block 510 100 10 {:min-y -50 :max-y 0 :speed 0.8})
                (block 670 10 10)
                (block 730 10 10)
                (block 790 10 10)]
    :platforms []}

   {:obstacles [(block 120 20 20 {:min-y -50 :max-y 0 :speed 1.0}) ;8
                (block 280 20 20 {:y -50 :min-y -50 :max-y 0 :speed 1.0})
                (block 440 20 20 {:min-y -50 :max-y 0 :speed 1.0})
                (block 430 10 10)
                (block 600 20 20 {:y -50 :min-y -50 :max-y 0 :speed 1.0})
                (block 760 20 20 {:min-y -50 :max-y 0 :speed 1.0})]
    :platforms []}

   {:obstacles [(block 120 660 5 {:y -65}) ;9
                (block 120 20 20 {:min-y -50 :max-y 0 :speed 1.0})
                (block 280 20 20 {:y -50 :min-y -50 :max-y 0 :speed 1.0})
                (block 440 20 20 {:min-y -50 :max-y 0 :speed 1.0})
                (block 430 10 10)
                (block 600 20 20 {:y -50 :min-y -50 :max-y 0 :speed 1.0})
                (block 760 20 20 {:min-y -50 :max-y 0 :speed 1.0})]
    :platforms []}

   {:obstacles [(block 100 40 15) ;10
                (block 170 40 15)
                (block 240 80 15 {:y -20})
                (block 380 20 20 {:min-y -40 :max-y 0 :speed 1.0})
                (block 600 100 10)]
    :platforms []}

   {:obstacles [(block 110 30 30) ;11
                (block 220 150 5 {:y -68})
                (block 270 15 16)
                (block 330 15 16)
                (block 460 20 20)
                (block 600 47 7)
                (block 730 20 20 {:min-y -80 :max-y 0 :speed 2.4})]
    :platforms []}

    {:obstacles [(block 100 9 44) ;12
                 (block 170 9 44)
                 (block 240 9 44)
                 (block 340 9 44)
                 (block 440 9 44)
                 (block 500 50 9 {:y -17})
                 (block 600 9 47)
                 (block 660 100 9 {:y -17})]
     :platforms []}

   {:obstacles [(block 90 20 20 {:min-x 90 :max-x 160 :speed 1.0}) ;13
                (block 230 20 20 {:min-x 160 :max-x 230 :speed 1.0})
                (block 350 20 20 {:min-x 350 :max-x 420 :speed 1.0})
                (block 490 20 20 {:min-x 420 :max-x 490 :speed 1.0})
                (block 610 20 20 {:min-x 610 :max-x 680 :speed 1.0})
                (block 750 20 20 {:min-x 680 :max-x 750 :speed 1.0})]
    :platforms []}

   {:obstacles [(block 120 20 20) ;14
                (block 190 20 20)
                (block 260 20 20)
                (block 330 20 20)
                (block 400 20 20)
                (block 490 20 20)
                (block 560 20 20)
                (block 630 20 20)
                (block 700 20 20)
                (block 770 20 20)]
    :platforms []}

   {:obstacles [(block 80 40 13 {:y -70}) ;15
                (block 80 40 13)
                (block 125 13 50 {:min-y -100 :max-y 0 :speed 1.3})
                (block 200 20 30)
                (block 320 20 20 {:min-x 320 :max-x 360 :speed 7})
                (block 420 20 20 {:min-x 420 :max-x 460 :speed 7})
                (block 520 60 10 {:y -40})
                (block 545 10 80 {:y -20})
                (block 700 110 7)]
    :platforms []}

    {:obstacles [(block 100 10 10) ;16
                 (block 100 10 10 {:y -68})
                 (block 180 10 40)
                 (block 260 10 10)
                 (block 260 10 10 {:y -68})
                 (block 340 10 40)
                 (block 500 15 40)
                 (block 560 80 12 {:y -17})
                 (block 700 10 10)
                 (block 700 10 10 {:y -68})
                 (block 770 20 20)
                 (block 840 20 20)
                 (block 845 10 10 {:y -68})]
     :platforms []}])
