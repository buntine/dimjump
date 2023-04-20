(ns dimjump.data
  (:require [quil.core :as q :include-macros true]))

(def text
  (memoize (fn [size]
             (q/create-font "AddStandard" size))))

(def dimensions {:w 640 :h 360})

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
   :platform-color [150 121 105]
   :trampoline-color [9 121 105]
   :grass-color [3 192 74]})

(letfn [(rel [dimension c]
          "If < 0, the coordinate (c) is interpreted as being offset from the bottom/right of the screen.
           Otherwise, from the top/left of the screen (e.g 0,0 is top left)."
          (if (< c 0)
            (+ (dimension constants) c)
            c))]
  (def rel-x (partial rel :w))
  (def rel-y (partial rel :h)))

(defn fade-cycle [{:keys [on off transition]
                  :or {on 180 off 90 transition 30}}]
  "Sets up the structure for a fading object.
   Config:
     on = number of frames to stay fully opaque
     off = number of frames to stay fully transparent
     fade-off = number of frames to transition from on to off
     fade-on = number of frames to transition from off to on

   alpha = the current alpha value
   step = the number of frames through the current phase
   phase = on | off | fade-on | fade-off"
    {:config {:on on :off off :fade-off transition :fade-on transition}
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

(defn pf
  ([x y w h] (block x y w h {}))
  ([x y w h {:keys [gravity bounce?]
             :or {gravity (:gravity constants) bounce? false}
             :as opts}]
    (block x y w h opts)))

(def levels
  [{:initial {:y 300
              :x -20
              :speed 2
              :time 90}
    :obstacles [(block 700 -10 20 10)]
    :platforms [(pf 0 -1 500 10)
                (pf 550 -1 500 10)
                (pf 200 -40 70 10)
                (pf 250 -80 70 10 {:fade {:on 200 :off 100 :transition 60}
                                   :min-x 200 :max-x 300 :speed 1 :gravity 0.3
                                   :bounce? true})
                (pf 320 -70 10 10)
                (pf 330 -60 10 10)
                (pf 340 -50 10 10)
                (pf 350 -40 10 10)
                (pf 360 -30 10 10)
                (pf 370 -20 10 10)
                (pf 380 -10 10 10)
                (pf -50 -300 10 500)]
    :exits [(block (- (:w constants) 60) -80 26 38)]}
  ])
