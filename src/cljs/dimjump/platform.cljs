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

(defn y-top [{:keys [y h]}]
  "Returns Y of the top of the platform."
  (- y h))

(defn x-right [{:keys [x w]}]
  "Returns X of the right of the platform."
  (+ x w))

(defn collision? [{px :x py :y pw :w ph :h} {ox :x oy :y ow :w oh :h}]
  "Returns true if the given platform (o) has collided with the
   given entity (the player - p). Currently operates on very basic 2D rectangles
   and does not support bounding boxes on rotated shapes.

   Note that a collision in this context means that the player landed on TOP of
   the platform. Other types of collisions with a platform are handled by the
   collision detection in the obstacles namespace."
  (let [p-top (- py (/ ph 2))
        p-bottom (+ py (/ ph 2))
        p-left (- px (/ pw 2))
        p-right (+ px (/ pw 2))
        o-right (+ ox ow)
        o-top (- oy oh)]
    (and (< p-left o-right)
         (< ox p-right)
         (< p-top o-top)
         (< o-top p-bottom))))

; Colliding with platform in valid way should:
;   *- set new Y (floor-y?) for dim
;   *- store a reference to the 'active' platform.
;   *- complete jump (might happen automatically?)
;
; When player jumps:
;   *- active platform is cleared out
;
; When player X goes past end of platform
;   *- Active platform is cleared out
;   *- Y is set back to the floor
;
; Need to implement a way to converge towards floor Y when
;   *- player is not jumping
;   *- player Y is higher than expected floor Y
;   *- (this will happen when player comes off end of a platform)


; - fall through floor and roof and right to left
; - to win, have to get into "door"
; - doors could be anywhere on the screen X and Y
; - could have "buttons" or "keys" that need to open the door
; - moving platforms, falling platforms, fading platforms
; - game should be whole page / fullscreen
