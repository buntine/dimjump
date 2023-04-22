(ns dimjump.dim
  (:require [quil.core :as q :include-macros true]
            [dimjump.data :as data :refer [constants]]
            [dimjump.quadrangle :as quadrangle]
            [dimjump.coordinate :as coordinate]))

(defrecord Dim
  [points velocity x-block move-x speed deaths frames ducking jump-gravity active-platform]
  coordinate/Coordinate

  (draw [dim]
    "Renders dim with fade-off trail relative to current speed"
    (let [sprite (sprite-for dim)
          points (reverse points)
          trail (take (count points) (coordinate/trail-opacities))
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

  (next-rotation [dim]
    "Returns next rotation value for dim (during a jump)"
    (if (jumping? dim)
      (coordinate/rotate dim)
      (coordinate/rotation dim)))

  (pos [dim]
    "Returns a map of current position and dimensions (x, y, w, h, rotation)"
    (let [f (frame dim)]
      (merge (last points)
             (select-keys f [:w :h]))))

  (progress [dim]
    "Receives player state and returns next state."
    (let [next-x (coordinate/next-x-position dim)
          next-y (next-y-position dim false)
          next-r (coordinate/next-rotation dim)]
      (-> dim
          (coordinate/add-point next-x next-y next-r)
          next-velocity
          finalize-jump))))

(defn spawn [opts]
  (map->Dim (merge
              (coordinate/spawn opts)
              {:deaths 0
               :frames {:standing [{:g (q/load-image "/images/dim_up1.png")
                                    :w 18
                                    :h 16}
                                   {:g (q/load-image "/images/dim_up2.png")
                                    :w 17
                                    :h 17}
                                   {:g (q/load-image "/images/dim_up3.png")
                                    :w 16
                                    :h 18}]
                        :ducking [{:g (q/load-image "/images/dim_down1.png")
                                   :w 22
                                   :h 12}
                                  {:g (q/load-image "/images/dim_down2.png")
                                   :w 21
                                   :h 13}
                                  {:g (q/load-image "/images/dim_down3.png")
                                   :w 20
                                   :h 14}]}
               :ducking false
               :jump-gravity 0
               :active-platform nil})))

(defn frame [{:keys [frames ducking]}]
  "Returns the current sprite frame suitable for display."
  (let [usable-frames ((if ducking :ducking :standing) frames)]
    (usable-frames
      (mod
        (int (/ (q/frame-count)
                (:animation-speed constants))) 3))))

(defn sprite-for [dim]
  "Returns the PImage suitable for the given frame number"
  (:g (frame dim)))
(letfn [(toggle-flag [flag]
          (fn [dim]
            (update dim flag not)))]

  (def duck (toggle-flag :ducking)))

(defn floor-y [{:keys [active-platform] :as dim}]
  (let [f (frame dim)]
    (if active-platform
      (- (quadrangle/y-top active-platform)
         (/ (:h f) 2))
      ##Inf)))

(defn reset [dim {:keys [x y speed]}]
  "Moves dim back to start of the screen, at the given Y position"
  (-> dim
      (assoc :speed speed)
      (assoc :jump-gravity 0)
      (assoc :active-platform nil)
      (coordinate/add-point x y 0)))

(defn jumping? [{:keys [jump-gravity]}]
  (> jump-gravity 0))

(defn jumpable? [{:keys [active-platform] :as dim}]
  "Returns true if dim is currently able to jump"
  (and (not (jumping? dim)) active-platform))

(defn jump [{:keys [ducking active-platform] :as dim}]
  "Initiates a small or big jump, depending on ducking status"
  (if-not (jumpable? dim)
    dim
    (let [velocity (if ducking
                     (:velocity-small constants)
                     (:velocity-big constants))
          gravity (or (:gravity active-platform) (:gravity constants))]
      (-> dim
          (assoc :jump-gravity gravity)
          (assoc :velocity velocity)))))

(defn finalize-jump [dim]
  "If jump is finished then reset velocity and just status"
  (if (and (jumping? dim)
           (= (:y (coordinate/pos dim)) (floor-y dim)))
    (-> dim
        (assoc :jump-gravity 0)
        (coordinate/add-point (assoc (last (:points dim)) :rotation 0))
        (assoc :velocity 0))
    dim))

(defn halt-jump [dim]
  "Stops a jump in place. This will occur when dim hits the bottom of a platform mid-jump"
  (update dim :velocity #(max % (- %))))

(defn kill [dim initial]
  (-> dim
      (update :deaths inc)
      (reset initial)))

(defn next-velocity [dim]
  "Updates velocity during a jump"
  (if (jumping? dim)
    (coordinate/next-velocity dim)
    dim))

(defn next-y-position
  "Returns the next Y position for the dim (necessary during a jump or when falling)"
  ([dim]
   (next-y-position dim true))
  ([dim consider-active-platform]
   (coordinate/next-y-position
     dim
     (if consider-active-platform (floor-y dim) ##Inf)
     #(if (jumping? %)
        (:velocity %)
        (:fall-velocity constants)))))

(defn correct-for-active-platform [dim {:keys [move-x]}]
  "Ensures the dim is positioned correctly on the X and Y axis after landing on a platform.
   This is because the active platform may be moving on either or both axis and the players relative
   X/Y must take that into account."
  (let [{:keys [x rotation]} (coordinate/pos dim)
        nx (+ move-x x)
        ny (floor-y dim)]
    (-> dim
        (coordinate/rectify-point nx ny rotation)
        finalize-jump)))

(defn collide-with-platform [dim platform]
  "Handles dim colliding with a platform."
  (-> dim
      (assoc :active-platform platform)
      (correct-for-active-platform platform)))
