(ns dimjump.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [dimjump.dim :as dim]
            [dimjump.obstacle :as obstacle]
            [dimjump.corpse :as corpse]
            [dimjump.data :as data]))

(def dimensions {:w (* 0.8 (.-innerWidth js/window))
                 :h 360})

(defn setup []
  (let [floor-y (* 0.70 (:h dimensions))]
    (q/no-stroke)
    (q/text-align :center :center)
    (q/text-font (q/create-font "/fonts/addstandard.ttf" 36))
    {:frame 0
     :w (:w dimensions)
     :h (:h dimensions)
     :floor-y floor-y
     :started false
     :gravity 0.8
     :velocity-big -10
     :velocity-small -8
     :corpses []
     :levels data/levels
     :dim (dim/initial-state floor-y q/load-image)}))

(defn inc-frame [state]
  (update state :frame inc))

(defn start-game [state]
  (assoc state :started true))

(defn draw-ground [state]
  (let [floor-y (:floor-y state)]
    (q/with-fill
      [197 226 175]
      (q/rect 0
              floor-y
              (:w dimensions)
              (- (:h dimensions) floor-y)))))

(defn draw-level [state]
  (let [level (get-in state [:dim :level])
        obstacles (get-in state [:levels level])]
    (doseq [o obstacles]
      (obstacle/draw o (:floor-y state)))))

(defn draw-dim [state]
  (dim/draw (:dim state) (:frame state)))

(defn draw-start-game [state]
  (q/with-fill
    [100 100 100]
    (q/text "Press any key to start",
            (/ (:w state) 2)
            (/ (:floor-y state) 2))))

(defn key-pressed [state event]
  (let [started (start-game state)]
    (case (:key-code event)
      40 (update started :dim dim/duck)
      38 (update started :dim dim/jump)
      started)))

(defn draw [state]
  (q/background (q/color 176 214 255))
  (draw-ground state)
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
        (update :dim dim/kill)
        (update :corpses conj (corpse/create-from dim sprite)))))

(defn detect-collision [state]
  "Kills the dim if it hits anything"
  (let [level (get-in state [:dim :level])
        obstacles (get-in state [:levels level])
        collision (some (partial obstacle/collision?
                                 (:floor-y state)
                                 (:dim state)) obstacles)]
    (if collision
      (kill-dim state)
      state)))

(defn progress-corpses [state]
  "Continues corpses and removes any that are no longer visible"
  (-> state
      (update :corpses #(filter corpse/visible?
                                (map corpse/progress %)))))

(defn progress [state]
  (if (:started state)
    (-> state
        inc-frame
        dim/progress
        progress-corpses
        detect-collision)
    state))

(defn init []
  (q/defsketch dim-jump
    :host "game"
    :settings #(q/smooth 2)
    :size (vals dimensions)
    :frame-rate 60
    :setup setup
    :draw draw
    :key-pressed key-pressed
    :update progress
    :middleware [m/fun-mode]))

(init)
