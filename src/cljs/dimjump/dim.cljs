(ns dimjump.dim
  (:require [quil.core :as q :include-macros true]
            [dimjump.data :as data :refer [constants]]
            [dimjump.position :as position]
            [dimjump.platform :as platform]))

(defn spawn [opts]
  (merge
    (position/spawn opts)
    {:w 16
     :h 24
     :deaths 0
     :frames {:standing [(q/load-image "/images/dim1.png")
                         (q/load-image "/images/dim2.png")]
              :ducking [(q/load-image "/images/dim3.png")
                        (q/load-image "/images/dim4.png")]}
     :ducking false
     :jumping false
     :active-platform nil
     :animation-speed 12}))

(defn toggle-flag [flag]
  (fn [dim]
    (update dim flag not)))

(def toggle-duck (toggle-flag :ducking))
(def toggle-jump (toggle-flag :jumping))

(defn floor-y [{:keys [active-platform] :as dim}]
  (if active-platform
    (- (platform/y-top active-platform)
       (/ (:h dim) 2))
    ##Inf))

(defn set-speed [op]
  "Returns a function that applies the given op on the speed and updates
  it if the result is within the bounds"
  (fn [{:keys [speed] :as dim}]
    (if-let [next-speed ((:speed-range constants) (op speed))]
      (assoc dim :speed next-speed)
      dim)))

(def speed-up (set-speed inc))
(def speed-down (set-speed dec))

(defn reset [dim {:keys [x y speed]}]
  "Moves dim back to start of the screen, at the given Y position"
  (-> dim
      (assoc :active-platform nil)
      (assoc :speed speed)
      (assoc :jumping false)
      (position/add-point x y 0)))

(defn duck [dim]
  "Toggles ducking and doubles/halves height of player accordingly"
  (let [operator (if (:ducking dim) * /)]
    (-> dim
        toggle-duck
        (update :h operator 2))))

(defn jumpable? [{:keys [jumping active-platform] :as dim}]
  "Returns true if dim is currently able to jump"
  (and (not jumping) active-platform))

(defn jump [{:keys [ducking] :as dim}]
  "Initiates a small or big jump, depending on ducking status"
  (if-not (jumpable? dim)
    dim
    (let [velocity (if ducking
                     (:velocity-small constants)
                     (:velocity-big constants))]
      (-> dim
          toggle-jump
          (assoc :velocity velocity)))))

(defn finalize-jump [dim]
  "If jump is finished then reset velocity and just status"
  (if (and (:jumping dim)
           (= (:y (position/pos dim)) (floor-y dim)))
    (-> dim
        toggle-jump
        (position/add-point (assoc (last (:points dim)) :rotation 0))
        (assoc :velocity 0))
    dim))

(defn kill [dim initial]
  (-> dim
      (update :deaths inc)
      (assoc :active-platform nil)
      (reset initial)))

(defn next-velocity [dim]
  "Updates velocity during a jump"
  (if (:jumping dim)
    (position/next-velocity dim)
    dim))

(defn next-y-position [dim]
  "Returns the next Y position for the dim (necessary during a jump or when falling)"
  (position/next-y-position
    dim
    (floor-y dim)
    #(if (:jumping %)
       (:velocity %)
       (:fall-velocity constants))))

(defn next-rotation [dim]
  "Returns next rotation value for dim (during a jump)"
  (if (:jumping dim)
    (position/next-rotation dim)
    (position/current-rotation dim)))

(defn progress [dim]
  "Receives player state and returns next state."
  (let [next-x (position/next-x-position dim)
        next-y (next-y-position dim)
        next-r (next-rotation dim)]
    (-> dim
        (position/add-point next-x next-y next-r)
        next-velocity
        finalize-jump)))

(defn correct-for-active-platform [dim]
  "Receives player state and returns next state."
  (if (:active-platform dim)
    (let [pos (position/pos dim)
          x (:x pos)
          y (floor-y dim)
          r (:rotation pos)]
      (-> dim
          (position/add-point x y r)))
    dim))

(defn collide-with-platform [dim platform]
  "Handles dim colliding with a platform."
  (-> dim
      (assoc :active-platform platform)
      progress))

(defn sprite-for [dim]
  "Returns the PImage suitable for the given frame number"
  (let [all-frames (:frames dim)
        frames ((if (:ducking dim) :ducking :standing) all-frames)]
    (frames (mod (int (/ (q/frame-count) (:animation-speed dim))) 2))))

(defn draw [dim]
  "Renders dim with fade-off trail relative to current speed"
  (let [sprite (sprite-for dim)
        points (reverse (:points dim))
        trail (take (count points) (position/trail-opacities))
        x-scale (if (>= (:speed dim) 0) 1.0 -1.0) ; Determine which way Dim is facing / rotating
        trail-with-opacities (map-indexed #(vector %2 (nth trail %1))
                                          points)]
    (doseq [[{x :x y :y rotation :rotation} opacity] trail-with-opacities]
      (q/push-matrix)
      (q/image-mode :center)
      (q/tint 255 opacity)
      (q/translate x y)
      (q/scale x-scale 1.0)
      (q/rotate rotation)
      (q/image sprite 0 0)
      (q/no-tint)
      (q/pop-matrix))))
