(ns dimjump.data
  (:require [quil.core :as q :include-macros true]))

(def text
  (memoize (fn [size]
             (q/create-font "AddStandard" size))))

(def dimensions {:w 1280 :h 720})

(def constants
  {:w (:w dimensions)
   :h (:h dimensions)
   :speed-min -4.0
   :speed-max 4.0
   :speed-jump 0.2
   :velocity-big -10
   :velocity-small -8
   :fall-velocity 5
   :max-velocity 12
   :gravity 0.8
   :hud-color [10 49 56]
   :exit-color [40 40 40]
   :cover-color [156 215 249 200]
   :grass-height 3
   :grass-color [3 192 74]})

(letfn [(rel [dimension c]
          "If < 0, the coordinate (c) is interpreted as being offset from the bottom/right of the screen.
           Otherwise, from the top/left of the screen (e.g 0,0 is top left)."
          (if (< c 0)
            (+ (dimension constants) c)
            c))]
  (def rel-x (partial rel :w))
  (def rel-y (partial rel :h)))

(defn block
  ([x y w h] (block x y w h {}))
  ([x y w h {:keys [min-x max-x min-y max-y speed]
             :or {min-x x max-x x min-y y max-y y speed 0}
             :as opts}]
    (merge opts
           {:x (rel-x x)
            :y (rel-y y)
            :w w
            :h h
            :min-x (rel-x min-x)
            :max-x (rel-x max-x)
            :min-y (rel-y min-y)
            :max-y (rel-y max-y)
            :move-x (- speed)
            :move-y (- speed)})))

(def levels
  [{:initial {:y 300
              :x -20
              :speed 2}
    :obstacles []
    :platforms [(block 0 -1 500 10)
                (block 550 -1 500 10)
                (block -50 -300 10 500)
                (block 320 -40 110 30)]
    :exits [(block (- (:w constants) 60) -80 26 38)]}
  ])
