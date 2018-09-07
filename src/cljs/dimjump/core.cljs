(ns dimjump.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [dimjump.dim :as dim]
            [dimjump.obstacle :as obstacle]
            [dimjump.corpse :as corpse]
            [dimjump.sound :as sound]
            [dimjump.data :as data :refer [constants]]))

(defn setup []
  (q/no-stroke)
  (q/frame-rate 60)

  {:frame 0
   :started false
   :level 0
   :corpses []
   :sound true
   :levels data/levels
   :dim (dim/spawn)})

(defn inc-frame [state]
  (update state :frame inc))

(defn start-game [state]
  (assoc state :started true))

(defn draw-ground []
  (let [{floor-y :floor-y w :w h :h} constants]
    (q/with-fill
      [197 226 175]
      (q/rect 0
              floor-y
              w
              (- h floor-y)))))

(defn draw-hud [{level :level dim :dim}]
  (let [{floor-y :floor-y w :w h :h} constants]
    (q/text-font (data/text 14))
    (q/text-align :left :bottom)
    (q/with-fill
      [116 154 195]
        (q/text (str "Level " (inc level) " with " (:deaths dim) " deaths") 10 5))
    (q/text-font (data/text 32))
    (q/text-align :right :baseline)
    (q/with-fill
      [130 159 108]
      (q/text "Dim Jump" (- w 10) (- h 20)))))

(defn draw-level [state]
  (let [level (:level state)
        obstacles (get-in state [:levels level])]
    (doseq [o obstacles]
      (obstacle/draw o))))

(defn draw-dim [state]
  (dim/draw (:dim state) (:frame state)))

(defn draw-start-game [state]
  (let [{w :w h :h} constants]
    (q/text-font (data/text 46))
    (q/with-fill
      [170 170 170 170]
      (q/rect 0 0 w h))
    (q/text-align :center :baseline)
    (q/with-fill
      [100 100 100]
      (q/text "Press any key to start"
              (/ w 2)
              (/ h 2)))))

(defn jump [state]
  (if (:sound state)
    (sound/play-sound (str "jump" (rand-int 7)) 0.5))
  (update state :dim dim/jump))

(defn key-pressed [state event]
  (let [game (start-game state)]
    (case (:key-code event)
      40 (update game :dim dim/duck)
      38 (jump state)
      37 (update game :dim dim/speed-down)
      39 (update game :dim dim/speed-up)
      80 (update game :started not)
      83 (update game :sound not)
      game)))

(defn draw [state]
  (q/background (q/color 176 214 255))
  (draw-ground)
  (draw-hud state)
  (draw-level state)
  (draw-dim state)

  (doseq [c (:corpses state)]
    (corpse/draw c))
  
  (if (not (:started state))
    (do
      (sound/pause-sound "invaded_city")
      (draw-start-game state))
    (sound/play-sound "invaded_city" 0.25)))

(defn kill-dim [state]
  (if (:sound state)
    (sound/play-sound :splat))
  (let [dim (:dim state)
        sprite (dim/sprite-for (:frame state) dim)]
    (-> state
        (update :corpses conj (corpse/spawn (dim/position dim) sprite))
        (update :dim dim/kill))))

(defn detect-collision [state]
  "Kills the dim if it hits anything"
  (let [level (:level state)
        obstacles (get-in state [:levels level])
        collision (some (partial obstacle/collision?
                                 (dim/position (:dim state))) obstacles)]
    (if collision
      (kill-dim state)
      state)))

(defn progress-corpses [state]
  "Continues corpses and removes any that are no longer visible"
  (update state :corpses #(filter corpse/visible?
                         (map corpse/progress %))))

(defn go-to-next-level [state]
  "Move to the next level"
  (-> state
      (update :level inc)
      (update :dim dim/reset)))

(defn progress-level [state]
  "Checks if it's necessary to go to the next level"
  (if (dim/past? (:dim state) (:w constants))
      (go-to-next-level state)
      state))

(defn progress [state]
  (if (:started state)
    (-> state
        inc-frame
        (update :dim dim/progress)
        progress-level
        progress-corpses
        detect-collision)
    state))

(defn init []
  (q/defsketch dim-jump
    :host "game"
    :settings #(q/smooth 2)
    :size (vals data/dimensions)
    :setup setup
    :draw draw
    :key-pressed key-pressed
    :update progress
    :middleware [m/fun-mode]))

(init)
