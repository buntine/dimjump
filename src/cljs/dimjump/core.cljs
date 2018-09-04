(ns dimjump.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [dimjump.dim :as dim]
            [dimjump.obstacle :as obstacle]
            [dimjump.corpse :as corpse]
            [dimjump.data :as data]))

(defn setup []
  (q/no-stroke)
  (q/text-align :center :center)
  (q/text-font
    (q/create-font "AddStandard" 36))

  {:frame 0
   :started false
   :level 0
   :corpses []
   :levels data/levels
   :dim (dim/spawn)})

(defn inc-frame [state]
  (update state :frame inc))

(defn start-game [state]
  (assoc state :started true))

(defn draw-ground []
  (let [{floor-y :floor-y w :w h :h} data/constants]
    (q/with-fill
      [197 226 175]
      (q/rect 0
              floor-y
              w
              (- h floor-y)))))

(defn draw-level [state]
  (let [level (:level state)
        obstacles (get-in state [:levels level])]
    (doseq [o obstacles]
      (obstacle/draw o))))

(defn draw-dim [state]
  (dim/draw (:dim state) (:frame state)))

(defn draw-start-game [state]
  (q/with-fill
    [100 100 100]
    (q/text "Press any key to start"
            (/ (:w data/constants) 2)
            (/ (:floor-y data/constants) 2))))

(defn key-pressed [state event]
  (let [started (start-game state)]
    (case (:key-code event)
      40 (update started :dim dim/duck)
      38 (update started :dim dim/jump)
      started)))

(defn draw [state]
  (q/background (q/color 176 214 255))
  (draw-ground)
  (draw-level state)
  (draw-dim state)

  (doseq [c (:corpses state)]
    (corpse/draw c))
  
  (if (not (:started state))
    (draw-start-game state)))

(defn kill-dim [state]
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
  (if (dim/past? (:dim state) (:w data/constants))
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
    :frame-rate 60
    :setup setup
    :draw draw
    :key-pressed key-pressed
    :update progress
    :middleware [m/fun-mode]))

(init)
