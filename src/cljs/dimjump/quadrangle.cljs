(ns dimjump.quadrangle
  (:require [quil.core :as q :include-macros true]
            [dimjump.data :as data :refer [constants]]))

(defprotocol Quadrangle
  "Represents a spawnable quadrangle entity on screen. Entities have four sides, dimensions and can be collided with, etc."
  (draw [entity] "Draws the entity to the canvas")
  (activated-progress [entity] "Called when the quadrangle is activated (player has touched it). Should return the updated quadrangle.")
  (kill? [entity] "If returns true, the quadrangle will be removed from the active level. e.g falling platform has gone off the bottom of the screen")
  (on-collision [entity direction state] "Should handle when player hits an entity. Return the updated game state."))

(defn y-top [{:keys [y h]}]
  "Returns Y of the top of the entity"
  (- y h))

(defn moving? [{:keys [move-x move-y]}]
  (not (and (= move-x 0) (= move-y 0))))

(defn visible? [{:keys [fade-cycle]}]
  "Is the quadrangle visible? A little bit of lenience is given here because
   a super faded platform is basically invisible."
  (if-let [{:keys [alpha]} fade-cycle]
    (> alpha 25)
    true))

(defn image-for [frames]
  "Returns the background frame suitable for current display."
  (let [c (count frames)]
    (frames
      (mod
        (int (/ (q/frame-count)
                (:tile-speed constants))) c))))

(defn initiate-quadrangle
  "Returns the provided collection of quadrangles, with the one identified by ID
   activated. Platforms are 'active' the moment the player first lands on them."
  [quadrangles pid]
  (map (fn [{:keys [id] :as q}]
         (if (= id pid)
           (assoc q :activated true)
           q))
       quadrangles))

(defn kill [{:keys [disabled] :as entity}]
  "Disables the entity if it's ready to be killed (e.g fallen off the screen)."
  (if (and (not disabled) (kill? entity))
    (-> entity
        (assoc :disabled true
               :activated false)
        (assoc-in [:fall :progress] 0)
        (assoc-in [:fall :lead] (:fall-lead constants)))
    entity))

(defn draw-rect [ctx x y w h]
  "Draws the quadrangle to the screen"
  (.beginPath ctx)
  (.rect ctx x y w h)
  (.closePath ctx)
  (.setTransform ctx 1 0 0 1 x y)
  (.fill ctx)
  (.setTransform ctx 1 0 0 1 0 0))

(defn collision
  "Determines if the given quadrangle has collided with the coordinate.
   If a collision is detected, a keyword indicating the direction of the
   collision is returned: :top, :left, :bottom, :right, :inside.

   Accepts a predicate that will operate on the quadrangle. If false, the
   quadrangle will not be considered for collision.

   nil indicates no collision."
  ([quadrangle position platform]
   (collision quadrangle position platform (fn [_] true)))
  ([{:keys [x y w h id disabled] :as quadrangle} {px :x py :y pw :w ph :h} {cid :id} pred]
    (when (and (visible? quadrangle)
               (not disabled)
               (pred quadrangle))
      (let [p-top (- py (/ ph 2))
            p-bottom (+ py (/ ph 2))
            p-left (- px (/ pw 2))
            p-right (+ px (/ pw 2))
            q-top (- y h)
            q-bottom y
            q-left x
            q-right (+ x w)
            top? (and (< p-left q-right)
                      (< q-left p-right)
                      (< p-top q-top)
                      (< py q-top)         ; Middle of dim is higher than top of platform
                      (<= q-top p-bottom))
            left? (and (>= p-right q-left) ; End of dim is after or on start of platform
                       (< p-left q-left)   ; Start of dim is before start of platform
                       (< p-top q-bottom)  ; Top of dim is higher than bottom of platform
                       (> p-bottom q-top)  ; Bottom of dim is lower than top of platform
                       (not= id cid))      ; Dim is not currently on that platform
            right? (and (> p-right q-right)
                        (<= p-left q-right)
                        (< p-top q-bottom)  ; Top of dim is higher than bottom of platform
                        (> p-bottom q-top)  ; Bottom of dim is lower than top of platform
                        (not= id cid))      ; Dim is not currently on that platform
            bottom? (and (< px q-right)
                         (> px q-left )
                         (<= p-top q-bottom)
                         (> p-bottom q-bottom)
                         (not= id cid))
            inside? (and (>= px q-left)
                         (<= px q-right)
                         (>= py q-top)
                         (<= py q-bottom))]
        (cond
          bottom? :bottom
          top? :top
          left? :left
          right? :right
          inside? :inside)))))

(letfn [(next-move [p min-p max-p move]
          "Inverts the movement factor when a moving entity hits it's min
           or max edge on the appropriate axis."
          (if (or
                (and (> move 0) (>= p max-p))
                (and (< move 0) (<= p min-p)))
            (- move)
            move))

         (next-move-x [{:keys [x min-x max-x move-x] :as e}]
          (assoc e :move-x (next-move x min-x max-x move-x)))

         (next-move-y [{:keys [y min-y max-y move-y] :as e}]
           (assoc e :move-y (next-move y min-y max-y move-y)))

         (next-x [{:keys [x min-x max-x move-x] :as e}]
           (assoc e :x (max min-x (min max-x (+ x move-x)))))

         (next-y [{:keys [y min-y max-y move-y] :as e}]
           (if (= min-y max-y) ; Bit of a hack to prevent this from interferring with 'falling' platforms.
             e
             (assoc e :y (max min-y (min max-y (+ y move-y))))))

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
                      :alpha next-alpha))))

         (specialist-activated-progress [{:keys [activated] :as entity}]
           (if activated
             (activated-progress entity)
             entity))]

  (defn progress [{:keys [disabled] :as entity}]
    "Update display and position based on platform config, if necessary"
    (if disabled
      entity
      (-> entity
          next-x
          next-y
          next-move-x
          next-move-y
          (update :fade-cycle progress-fade)
          specialist-activated-progress))))
