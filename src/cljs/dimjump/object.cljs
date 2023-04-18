(ns dimjump.object
  (:require [quil.core :as q :include-macros true]))

(defprotocol Entity
  "Represents a spawnable entity on screen. Entities have dimensions, can be collided with, etc."
  (draw [entity] "Draws the entity to the canvas")
  (on-collision [entity direction state] "Should handle when player hits an entity. Return the updated game state."))

(defn y-top [{:keys [y h]}]
  "Returns Y of the top of the entity"
  (- y h))

(defn moving? [{:keys [move-x move-y]}]
  (not (and (= move-x 0) (= move-y 0))))

(defn visible? [{:keys [fade-cycle]}]
  "Is the object visible? A little bit of lenience is given here because
   a super faded platform is basically invisible."
  (if-let [{:keys [alpha]} fade-cycle]
    (> alpha 25)
    true))

(defn collision [{:keys [x y w h] :as object} {px :x py :y pw :w ph :h}]
  "Determines if the given positional object has collided with the entity.
   If a collision is detected, a keyword indicating the direction of the
   collision is returned: :top, :left, :bottom, :right, :inside.

   nil indicates no collision."
  (when (visible? object)
    (let [p-top (- py (/ ph 2))
          p-bottom (+ py (/ ph 2))
          p-left (- px (/ pw 2))
          p-right (+ px (/ pw 2))
          o-top (- y h)
          o-bottom y
          o-left x
          o-right (+ x w)
          top? (and (< p-left o-right)
                    (< o-left p-right)
                    (< p-top o-top)
                    (<= o-top p-bottom))
          left? (and (>= p-right o-left)
                     (< p-left o-left)
                     (< py o-bottom)
                     (> py o-top))
          right? (and (> p-left o-left)
                      (<= p-left o-right)
                      (< py o-bottom)
                      (> py o-top))
          bottom? (and (< p-left o-right)
                       (< o-left p-right)
                       (< p-top o-bottom)
                       (> p-bottom o-top))
          inside? false]
      (cond
        left? :left
        right? :right
        top? :top
        bottom? :bottom
        inside? :inside))))

(letfn [(next-move [p min-p max-p move]
          "Inverts the movement factor when a moving entity hits it's min
           or max edge on the appropriate axis."
          (if (or
                (and (> move 0) (>= p max-p))
                (and (< move 0) (<= p min-p)))
            (- move)
            move))

         (next-move-x [{:keys [x min-x max-x move-x]}]
          (next-move x min-x max-x move-x))

         (next-move-y [{:keys [y min-y max-y move-y]}]
           (next-move y min-y max-y move-y))

         (next-x [{:keys [x min-x max-x move-x]}]
           (max min-x (min max-x (+ x move-x))))

         (next-y [{:keys [y min-y max-y move-y]}]
           (max min-y (min max-y (+ y move-y))))

         (progress-step [config step phase]
           (let [steps (phase config)
                 next-step (inc step)]
             (if (>= next-step steps)
               0
               next-step)))

         (progress-phase [step phase]
           (let [transitions {:on :fade-off :fade-off :off :off :fade-on :fade-on :on}]
             (if (= step 0)
               (phase transitions)
               phase)))

         (calculate-alpha [{:keys [fade-on fade-off]} step phase]
           (let [a-on 255 a-off 0]
             (case phase
               :on a-on
               :off a-off
               :fade-on (min (* (/ a-on fade-off) step) a-on)
               :fade-off (max (- a-on (* (/ a-on fade-off) step)) a-off))))

         (progress-fade [{:keys [config alpha step phase] :as fade-cycle}]
           (when alpha
             (let [next-step (progress-step config step phase)
                   next-phase (progress-phase next-step phase)
                   next-alpha (calculate-alpha config next-step next-phase)]
               (assoc fade-cycle
                      :step next-step
                      :phase next-phase
                      :alpha next-alpha))))]

  (defn progress [entity]
    "Update display and position based on platform config, if necessary"
    (-> entity
        (assoc :x (next-x entity)
               :y (next-y entity)
               :move-x (next-move-x entity)
               :move-y (next-move-y entity))
        (update :fade-cycle progress-fade))))
