(ns dimjump.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [dimjump.dim :as dim]
            [dimjump.level :as level]
            [dimjump.corpse :as corpse]
            [dimjump.blood :as blood]
            [dimjump.sound :as sound]
            [dimjump.data :as data :refer [constants]]))

(defn setup []
  (q/no-stroke)
  (q/frame-rate 60)
  (.focus (.getElementById js/document "game"))

  {:frame 0
   :started false
   :level (level/spawn 0)
   :corpses []
   :blood []
   :sound true
   :images {:pause (q/load-image "/images/pause.png")
            :ground (q/load-image "/images/ground.png")}
   :dim (dim/spawn)})

(defn inc-frame [state]
  (update state :frame inc))

(defn start-game [state]
  (assoc state :started true))

(defn draw-ground [state]
  (let [{floor-y :floor-y w :w h :h} constants]
    (q/image (get-in state [:images :ground]) 0 floor-y)))

(defn draw-hud [{level :level dim :dim}]
  (q/text-font (data/text 14))
  (q/text-align :left :bottom)
  (q/with-fill
    [40 99 116]
      (q/text (str "Level " (inc (:index level)) " with " (:deaths dim) " deaths")
              10 5)))

(defn draw-dim [state]
  (dim/draw (:dim state) (:frame state)))

(defn draw-start-game [state]
  (let [{w :w h :h} constants]
    (q/with-fill
      [170 170 170 200]
      (q/rect 0 0 w h))
    (q/image-mode :corner)
    (q/image (get-in state [:images :pause]) 0 0)))

(defn jump [state]
  (if (and (:sound state) (not (get-in state [:dim :jumping])))
    (sound/play-sound (str "jump" (rand-int 7)) 0.5))
  (update state :dim dim/jump))

(defn key-pressed [state event]
  (let [game (start-game state)]
    (case (:key-code event)
      40 (update game :dim dim/duck)
      38 (jump game)
      37 (update game :dim dim/speed-down)
      39 (update game :dim dim/speed-up)
      80 (update game :started not)
      83 (update game :sound not)
      game)))

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

  (if (not (:started state))
    (draw-start-game state))

  (if (and (:sound state) (:started state))
    (sound/play-sound "invaded_city" 0.25)
    (sound/pause-sound "invaded_city")))

(defn create-blood-splatter [{:keys [speed] :as dim}]
  (let [position (dim/position dim)]
    (map
      #(blood/spawn position % speed)
      (range -10 -2))))

(defn kill-dim [{:keys [sound dim frame] :as state}]
  (if sound
    (sound/play-sound :splat))
  (let [sprite (dim/sprite-for frame dim)
        position (dim/position dim)]
    (-> state
        (update :corpses conj (corpse/spawn position sprite))
        (update :blood concat (create-blood-splatter dim))
        (update :dim dim/kill))))

(defn detect-blood-collision [{:keys [blood level] :as state}]
  "Stops any blood particles that hit an obstacle"
  (let [stay-or-go (fn [b] (if (and (blood/moving? b) (level/collided? level b))
                             (blood/stay b)
                             b))]
    (update state
            :blood
            (partial map stay-or-go))))

(defn detect-dim-collision [{:keys [level dim] :as state}]
  "Kills the dim if it hits anything"
  (if (level/collided? level (dim/position dim))
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

(defn progress-level [state]
  "Moves to the next level if it is necessary to do so"
  (if (dim/past? (:dim state) (:w constants))
      (-> state
          (assoc :blood [])
          (update :level level/move-next)
          (update :dim dim/reset))
      state))

(defn progress [state]
  (if (:started state)
    (-> state
        inc-frame
        (update :dim dim/progress)
        progress-level
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
