(ns dimjump.platform
  (:require [quil.core :as q :include-macros true]
            [dimjump.data :as data :refer [constants]]))

(defn spawn [opts]
  (merge {:kind :platform}
         opts))

(defn draw [{:keys [x w h y]} ctx]
  (.beginPath ctx)
  (.rect ctx x (- y h) w h)
  (.closePath ctx)
  (.fill ctx)

  (q/with-fill (constants :grass-color)
    (q/rect x (- y h) w (constants :grass-height))))

(defn collision? [{px :x py :y pw :w ph :h} {ox :x oy :y ow :w oh :h}]
  "Returns true if the given platform (o) has collided with the
   given entity (the player - p). Currently operates on very basic 2D rectangles
   and does not support bounding boxes on rotated shapes."
  (let [py-top (- py (/ ph 2))
        py-bottom (+ py (/ ph 2))
        px-left (- px (/ pw 2))
        px-right (+ px (/ pw 2))]
    (and (< px-left (+ ox ow))
         (< ox px-right)
         (< py-top oy)
         (< (- oy oh) py-bottom))))

; Colliding with platform in valid way should:
;   - set new Y (floor-y?) for dim
;   - store a reference to the 'active' platform.
;   - complete jump (might happen automatically?)
;
; When player jumps, active platform is cleared out
; When player X goes past end of platform
;   - Active platform is cleared out
;   - Y is set back to the floor
;
; Need to implement a way to converge towards floor Y when
;   - player is not jumping
;   - player Y is higher than expected floor Y
;   - (this will happen when player comes off end of a platform)
