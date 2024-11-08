(ns dimjump.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [dimjump.dim :as dim]
            [dimjump.level :as level]
            [dimjump.quadrangle :as quadrangle]
            [dimjump.corpse :as corpse]
            [dimjump.blood :as blood]
            [dimjump.sound :as sound]
            [dimjump.coordinate :as coordinate]
            [dimjump.obstacles.oilspill]
            [dimjump.obstacles.spikes]
            [dimjump.platforms.rock]
            [dimjump.platforms.pipe]
            [dimjump.platforms.trampoline]
            [dimjump.exits.sign]
            [dimjump.factories.entity :as entity-factory]
            [dimjump.data :as data :refer [constants]]))

(defn setup []
  (q/no-stroke)
  (q/frame-rate 60)
  (.focus (.getElementById js/document "game"))

;  (let [url "https://www.fontsquirrel.com/fonts/download/roboto"]
;    (q/set-state! :font (q/load-font url)))

  (let [l (level/spawn (:starting-level constants) entity-factory/entity)]
    {:phase 0 ; 0: Intro/Pause, 1: Cue next level, 2: Play, 3: Finished
     :level l
     :corpses []
     :blood []
     :sound true
     :images {:pause (q/load-image "/images/pause.png")
              :end (q/load-image "/images/end.png")}
     :dim (dim/spawn (:initial l))}))

(defn start-game [state]
  (assoc state :phase 2))

(defn pause-game [state]
  (assoc state :phase 0))

(defn finish-game [state]
  (assoc state :phase 3))

(defn draw-hud [{:keys [level dim]}]
  (let [{w :w h :h} constants
        {:keys [time]} level]
    (q/with-fill
      (:hud-color constants)
      (q/text-align :left :bottom)
      (q/text ((comp int str) (/ time 1000)) 5 17)
      (q/text-align :right :bottom)
      (q/text (str "Level " (inc (:index level)) " with " (:deaths dim) " deaths")
              (- w 5) 17))))

(defn draw-with-cover [f]
  (let [{w :w h :h} constants]
    (q/with-fill
      (:cover-color constants)
      (q/rect 0 0 w h)
      (f))))

(defn draw-start-game [state]
  (draw-with-cover (fn []
    (q/image-mode :corner)
    (q/image (get-in state [:images :pause]) 0 0))))

(defn draw-end-game [state]
  (draw-with-cover (fn []
    (q/image-mode :corner)
    (q/image (get-in state [:images :end]) 0 0))))

(defn jump [{:keys [dim] :as state}]
  (if (and (dim/jumpable? dim) (:sound state))
    (sound/play-sound (str "jump" (rand-int 7)) 0.5))
  (update state :dim dim/jump))

(defn key-pressed [state event]
  (case (:phase state)
    3 (start-game state)
    0 (case (:key-code event)
        (13 32 80 40 37 38 39
         65 66 67 68) (start-game state)
        state)
    2 (case (:key-code event)
        (40 67) (update state :dim dim/duck)
        (38 66) (jump state)
        80 (pause-game state)
        83 (update state :sound not)
        state)))

(defn draw [state]
  (q/background (q/color 176 222 249))
  ;(q/text-font (q/state :font) 12)
  (q/image-mode :corner)
  (level/draw (:level state))
  (draw-hud state)

  (doseq [c (:corpses state)]
    (corpse/draw c))
  
  (doseq [b (:blood state)]
    (coordinate/draw b))

  (case (:phase state)
    0 (draw-start-game state)
    3 (draw-end-game state)
    2 (coordinate/draw (:dim state))))

(defn detect-blood-collision [{:keys [blood level] :as state}]
  "Stops any blood particles that hit an applicable obstacle."
  (letfn
    [(attach-blood [b]
       (let [collisions (level/collided-entities level (coordinate/pos b))]
         (if (empty? collisions)
           (blood/unstay b)
           (let [[entity _] (first collisions)]
             (if (:blood-collision? entity)
               (blood/stay b entity)
               (blood/unstay b))))))]
    (update state
            :blood
            (partial map attach-blood))))

(defn clear-platform [state]
  (-> state
      (assoc-in [:dim :x-block] nil)
      (assoc-in [:dim :active-platform] nil)))

(defn detect-entity-collision [{:keys [level dim] :as state} previous-platform]
  "Handles the dim colliding with an entity on the current level."
  (let [es (level/collided-entities level (coordinate/pos dim) previous-platform)]
    (if (empty? es)
      state
      (reduce (fn [s [e dir]] (quadrangle/on-collision e dir s)) state es))))

(defn progress-corpses [state]
  "Continues corpses and removes any that are no longer visible"
  (update state :corpses #(filter
                             corpse/visible?
                             (map corpse/progress %))))

(defn progress-blood [state]
  "Continues blood splatters and removes any that are no longer visible"
  (update state :blood #(filter
                           blood/visible?
                           (map coordinate/progress %))))

(defn place-dim [{:keys [dim level] :as state}]
  "Places the dim correctly for the current level"
  (-> state
      (update :dim dim/reset (:initial level))))

(defn go-to-next-level [{:keys [dim level] :as state}]
  "Moves to the next level"
  (if (level/last? level)
    (finish-game state)
    (-> state
        (assoc :phase 2)
        (assoc :blood [])
        (update :level level/move-next entity-factory/entity)
        place-dim)))

(defn set-speed [state]
  "Updates the speed if the user is holding/pressing the appropriate key"
  (let [k (q/key-as-keyword)]
    (if (q/key-pressed?)
      (case k
        :left (update state :dim coordinate/speed-down)
        :right (update state :dim coordinate/speed-up)
        state)
      state)))

(defn check-timeout [{:keys [level] :as state}]
  "Kill the player when they run out of time"
  (if (level/out-of-time? level)
    (-> state
        (update :dim dim/kill (:initial level))
        (update :level level/reset-phase)
        (update :level level/reset-platforms)
        (update :level level/reset-time))
    state))

(defn force-jump [{:keys [dim] :as state}]
  "If player has landed on a trampoline-style platform, force a jump"
  (if-let [platform (:active-platform dim)]
    (if (:bounce? platform)
      (jump state)
      state)
    state))

(defn progress [{:keys [dim] :as state}]
  "Produce the next game state from the current state"
  (let [previous-platform (:active-platform dim)
        s (if (= (:phase state) 2)
            (-> state
                (update :level level/progress)
                (update :dim coordinate/progress)
                progress-corpses
                detect-blood-collision
                progress-blood
                clear-platform
                (detect-entity-collision previous-platform)
                set-speed
                force-jump
                check-timeout)
            state)]
    (if (= (:phase s) 1)
      (go-to-next-level s)
      s)))

(defn init []
  (q/defsketch dim-jump
    :host "game"
    :renderer :p2d
    :size (vals data/dimensions)
    :settings #(q/smooth 2)
    :setup setup
    :draw draw
    :key-pressed key-pressed
    :update progress
    :middleware [m/fun-mode]))

(init)
