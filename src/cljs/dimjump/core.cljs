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

  (let [l (level/spawn 0)]
    {:phase 0 ; 0: Intro/Pause, 1: Play, 2: Finished
     :level l
     :corpses []
     :blood []
     :sound true
     :images {:pause (q/load-image "/images/pause.png")
              :end (q/load-image "/images/end.png")
              :sky (q/load-image "/images/sky.png")
              :ground (q/load-image "/images/ground.png")}
     :dim (dim/spawn (:initial l))}))

(defn start-game [state]
  (assoc state :phase 1))

(defn pause-game [state]
  (sound/pause-sound "invaded_city")
  (assoc state :phase 0))

(defn finish-game [state]
  (assoc state :phase 2))

(defn draw-backdrop [state]
  (q/image (get-in state [:images :sky]) 0 0))

(defn draw-hud [{:keys [level dim]}]
  (let [{w :w h :h} constants]
    (q/with-fill
      (:hud-color constants)
      (q/text (str "Level " (inc (:index level)) " with " (:deaths dim) " deaths")
              (- w 5) 17))))

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

(defn jump [{:keys [dim] :as state}]
  (if (and (dim/jumpable? dim) (:sound state))
    (sound/play-sound (str "jump" (rand-int 7)) 0.5))
  (update state :dim dim/jump))

(defn key-pressed [state event]
  (case (:phase state)
    2 (start-game state)
    0 (case (:key-code event)
        (13 32 80 40 37 38 39
         65 66 67 68) (start-game state)
        state)
    1 (case (:key-code event)
        (40 67) (update state :dim dim/duck)
        (38 66) (jump state)
        (37 65) (update state :dim dim/speed-down)
        (39 68) (update state :dim dim/speed-up)
        80 (pause-game state)
        83 (update state :sound not)
        state)))

(defn draw [state]
  (q/background (q/color 176 222 249))
  (q/text-font (data/text 12))
  (q/text-align :right :bottom)
  (q/image-mode :corner)
  (draw-backdrop state)
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
      (range -20 -2))))

(defn kill-dim [{:keys [sound dim level] :as state}]
  (if sound
    (sound/play-sound :splat))
  (let [sprite (dim/sprite-for dim)
        position (dim/position dim)]
    (-> state
        (update :corpses conj (corpse/spawn position sprite))
        (update :blood concat (create-blood-splatter dim))
        (update :dim dim/kill (:initial level)))))

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

(defn detect-platform-collision [{:keys [level dim] :as state}]
  "Handles the dim landing on a valid platform"
  (let [platform (level/collided-platform level (dim/position dim))]
    (if platform
      (-> state
          (update :dim dim/collide-with-platform platform))
      state)))

(defn detect-object-collision [{:keys [level dim] :as state}]
  "Kills the dim if it hits anything"
  (if (level/collided-obstacle level (dim/position dim))
    (kill-dim state)
    state))

(defn detect-end-platform [{:keys [level dim] :as state}]
  "Handles the dim coming to the end of a platform"
  (let [platform (:active-platform dim)]
    (if platform
      (-> state
          (update :dim dim/progress-platform platform))
      state)))

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

(defn place-dim [{:keys [dim level] :as state}]
  "Places the dim correctly for the current level"
  (-> state
      (update :dim dim/reset (:initial level))))

(defn go-to-next-level [{:keys [dim level] :as state}]
  "Moves to the next level"
  (if (level/last? level)
    (finish-game state)
    (-> state
        (assoc :blood [])
        (update :level level/move-next)
        place-dim)))

(defn detect-exit-collision [{:keys [level dim] :as state}]
  "Handles the dim landing on an exit"
  (if-let [exit (level/collided-exit level (dim/position dim))]
    (go-to-next-level state)
    state))

(defn progress [state]
  (if (= (:phase state) 1)
    (-> state
        (update :dim dim/progress)
        (update :level level/progress)
        progress-corpses
        progress-blood
        detect-end-platform
        detect-exit-collision
        detect-blood-collision
        detect-platform-collision
        detect-object-collision)
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
