(ns dimjump.data
  (:require [quil.core :as q :include-macros true]))

(def text
  (memoize (fn [size]
             (q/create-font "AddStandard" size))))

(def dimensions {:w 640 :h 360})

(def constants
  {:w (:w dimensions)
   :h (:h dimensions)
   :tile-size 8
   :speed-min -4.0
   :speed-max 4.0
   :speed-jump 0.2
   :velocity-big -10
   :velocity-small -8
   :fall-velocity 5
   :max-velocity 11
   :gravity 0.8
   :blood-degradation 1.6
   :animation-speed 9
   :tile-speed 18
   :hud-color [10 49 56]
   :cover-color [156 215 249 200]})

(letfn [(rel [dimension c]
          "If < 0, the coordinate (c) is interpreted as being offset from the bottom/right of the screen.
           Otherwise, from the top/left of the screen (e.g 0,0 is top left)."
          (let [o (* c (:tile-size constants))]
            (if (< c 0)
              (+ (dimension constants) o)
              o)))]
  (def rel-x (partial rel :w))
  (def rel-y (partial rel :h)))

(defn fade-cycle [{:keys [on off transition]
                  :or {on 180 off 90 transition 30}}]
  "Sets up the structure for a fading quadrangle.
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

(defn generate-id []
  (apply str (repeatedly 8
                         #(rand-nth "abcdefghijklmnopqrstuvwxyz0123456789"))))

(defn quadrangle
  ([x y w h] (quadrangle x y w h {}))
  ([x y w h {:keys [min-x max-x min-y max-y speed fade]
             :or {min-x x max-x x min-y y max-y y speed 0}
             :as opts}]
  "Produces a new quadrangle for inclusion in a level. Quadrangles are defined
   by their dimensions, kind and behaviour.

   All dimensions and coordinates are multiplied by the tile size (e.g 8).

   A special-case X position of :zero can be supplied that will cause the quadrangle
   to start 1 tile off the left of the screen. This is basically to prevent a bug where
   the player falls through a platform when travelling off the left of the screen and
   appearing on the right."
    (merge opts
           {:id (generate-id)
            :x (case x
                 :zero (* -1 (:tile-size constants))
                 (rel-x x))
            :y (rel-y y)
            :w (* w (:tile-size constants))
            :h (* h (:tile-size constants))
            :min-x (rel-x min-x)
            :max-x (rel-x max-x)
            :min-y (rel-y min-y)
            :max-y (rel-y max-y)
            :move-x (- speed)
            :move-y (- speed)
            :fade-cycle (when fade (fade-cycle fade))})))

(defn pf
  ([kind x y w h] (pf kind x y w h {}))
  ([kind x y w h {:keys [gravity bounce?]
             :or {gravity (:gravity constants) bounce? false}
             :as opts}]
    (quadrangle x y w h (merge opts {:kind kind}))))

(defn ob
  ([kind x y w h] (ob kind x y w h {}))
  ([kind x y w h opts]
     (quadrangle x y w h (merge opts {:kind kind}))))

(def ex ob)

; Special-case to allow a quadrangle to align to the bottom of the viewport.
(def bottom (/ (:h constants) (:tile-size constants)))

(def levels
  [{:initial {:y 280
              :x -20
              :speed 2
              :time 90}
    :obstacles [(ob :oilspill 12 -3 2 1)
                (ob :oilspill 58 -4 6 10 {:rotation 270})]
    :platforms [(pf :rock :zero bottom 85 2)
                (pf :pipe 10 -5 6 1)
                (pf :rock 30 -1 6 3)
                (pf :spikes 33 -4 1 10 {:fade {:on 200 :off 100 :transition 60} :min-x 23 :max-x 35 :speed 1 :rotation 270})
                (pf :rock 34 -4 6 10 {:fade {:on 200 :off 100 :transition 60} :min-x 24 :max-x 36 :speed 1})
                (pf :spikes 40 -4 1 10 {:fade {:on 200 :off 100 :transition 60} :min-x 30 :max-x 42 :speed 1 :rotation 90})
                (pf :trampoline 52 -1 2 1 {:gravity 0.4})]
    :exits [(ex :sign -4 -10 3 5)]}
  ])
