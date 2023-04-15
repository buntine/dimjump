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
   :obstacle-color [80 80 80]
   :platform-color [60 200 80]
   :grass-color [3 192 74]})

(letfn [(rel [dimension c]
          "If < 0, the coordinate (c) is interpreted as being offset from the bottom/right of the screen.
           Otherwise, from the top/left of the screen (e.g 0,0 is top left)."
          (if (< c 0)
            (+ (dimension constants) c)
            c))]
  (def rel-x (partial rel :w))
  (def rel-y (partial rel :h)))

(defn fade-cycle [{:keys [on off fade]
                  :or {on 180 off 90 fade 30}}]
  "Sets up the structure for a fading object.
   on = number of frames to stay fully opaque
   off = number of frames to stay fully transparent
   fade = number of frames to transition from on to off"
    {:config {:on on :off off :fade fade}
     :alpha 255
     :step 0
     :phase :on})

(defn block
  ([x y w h] (block x y w h {}))
  ([x y w h {:keys [min-x max-x min-y max-y speed fade]
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
            :move-y (- speed)
            :fade-cycle (when fade (fade-cycle fade))})))

(def levels
  [{:initial {:y 300
              :x -20
              :speed 2}
    :obstacles [(block 700 -10 20 10)]
    :platforms [(block 0 -1 500 10)
                (block 550 -1 500 10)
                (block 200 -40 70 10)
                (block 250 -80 70 10)
                (block 320 -70 10 10)
                (block 330 -60 10 10)
                (block 340 -50 10 10)
                (block 350 -40 10 10)
                (block 360 -30 10 10)
                (block 370 -20 10 10)
                (block 380 -10 10 10)
                (block -50 -300 10 500)]
    :exits [(block (- (:w constants) 60) -80 26 38)]}
  ])
