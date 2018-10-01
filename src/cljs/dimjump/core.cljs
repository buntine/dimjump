(ns dimjump.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [dimjump.dim :as dim]
            [dimjump.level :as level]
            [dimjump.obstacle :as obstacle]
            [dimjump.corpse :as corpse]
            [dimjump.blood :as blood]
            [dimjump.sound :as sound]
            [dimjump.data :as data :refer [constants]]))

(defn setup []
  (q/no-stroke)
  (q/frame-rate 60)
  (.focus (.getElementById js/document "game"))

  {:phase 0 ; 0: Intro/Pause, 1: Play, 2: Finished
   :level (level/spawn 0)
   :corpses []
   :blood []
   :sound true
   :images {:pause (q/load-image "/images/pause.png")
            :end (q/load-image "/images/end.png")
            :ground (q/load-image "/images/ground.png")}
   :dim (dim/spawn)})

(defn start-game [state]
  (assoc state :phase 1))

(defn pause-game [state]
  (sound/pause-sound "invaded_city")
  (assoc state :phase 0))

(defn finish-game [state]
  (assoc state :phase 2))

(defn draw-ground [state]
  (let [{floor-y :floor-y w :w h :h} constants]
    (q/image (get-in state [:images :ground]) 0 floor-y)))

(defn draw-hud [{level :level dim :dim}]
  (q/text-font (data/text 14))
  (q/with-fill
    (:hud-color constants)
      (q/text (str "Level " (inc (:index level)) " with " (:deaths dim) " deaths")
              10 18)))

(defn draw-dim [state]
  (dim/draw (:dim state)))

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

(defn jump [state]
  (if (and (:sound state) (not (get-in state [:dim :jumping])))
    (sound/play-sound (str "jump" (rand-int 7)) 0.5))
  (update state :dim dim/jump))

(defn key-pressed [state event]
  (case (:phase state)
    (0 2) (start-game state)
    1 (case (:key-code event)
        40 (update state :dim dim/duck)
        38 (jump state)
        37 (update state :dim dim/speed-down)
        39 (update state :dim dim/speed-up)
        80 (pause-game state)
        83 (update state :sound not)
        state)))

(defn draw [state]
  (q/background (q/color 98 203 255))
  (q/image-mode :corner)
  (draw-ground state)
  (draw-hud state)
  (level/draw (:level state))
  (draw-dim state)

  (doseq [c (:corpses state)]
    (corpse/draw c))
  
  (doseq [b (:blood state)]
    (blood/draw b))

  (case (:phase state)
    0 (draw-start-game state)
    2 (draw-end-game state)
    1 (if (:sound state)
        (sound/play-sound "invaded_city" 0.25)
        (sound/pause-sound "invaded_city"))))

(defn create-blood-splatter [{:keys [speed] :as dim}]
  (let [position (dim/position dim)]
    (map
      #(blood/spawn position % speed)
      (range -10 -2))))

(defn kill-dim [{:keys [sound dim] :as state}]
  (if sound
    (sound/play-sound :splat))
  (let [sprite (dim/sprite-for dim)
        position (dim/position dim)]
    (-> state
        (update :corpses conj (corpse/spawn position sprite))
        (update :blood concat (create-blood-splatter dim))
        (update :dim dim/kill))))

(defn detect-blood-collision [{:keys [blood level] :as state}]
  "Stops any blood particles that hit an obstacle. Currently, if a blood
   particule hits a *moving* obstacle then it just keeps going through it."
  (letfn
    [(attach-blood [b]
       (let [obstacle (and (blood/moving? b) (level/collided-obstacle level b))
             should-stay (and obstacle (not (obstacle/moving? obstacle)))]
         (if should-stay
           (blood/stay b)
           b)))]
    (update state
            :blood
            (partial map attach-blood))))

(defn detect-dim-collision [{:keys [level dim] :as state}]
  "Kills the dim if it hits anything"
  (if (level/collided-obstacle level (dim/position dim))
    (kill-dim state)
    state))

(defn progress-corpses [state]
  "Continues corpses and removes any that are no longer visible"
  (update state :corpses #(filter
                             corpse/visible?
                             (map corpse/progress %))))

(defn progress-blood [state]
  "Continues blood splatters and removes any that are no longer visible"
  (update state :blood #(filter
                           blood/visible?
                           (map blood/progress %))))

(defn progress-to-finish-game [{:keys [dim level] :as state}]
  "Updates game phase if player has finished last level"
  (if (and (dim/past? dim (:w constants))
           (level/last? level))
    (finish-game state)
    state))

(defn progress-to-next-level [{:keys [dim] :as state}]
  "Moves to the next level if it is necessary to do so"
  (if (dim/past? dim (:w constants))
    (-> state
      (assoc :blood [])
      (update :level level/move-next)
      (update :dim dim/reset))
    state))

(defn progress [state]
  (if (= (:phase state) 1)
    (-> state
        (update :dim dim/progress)
        (update :level level/progress)
        progress-to-finish-game
        progress-to-next-level
        progress-corpses
        progress-blood
        detect-blood-collision
        detect-dim-collision)
    state))

(defn init []
  (q/defsketch dim-jump
    :host "game"
    :rendered "p2d"
    :settings #(q/smooth 2)
    :size (vals data/dimensions)
    :setup setup
    :draw draw
    :key-pressed key-pressed
    :update progress
    :middleware [m/fun-mode]))

(init)
