(ns dimjump.exit
  (:require [quil.core :as q :include-macros true]
            [dimjump.quadrangle :as quadrangle]
            [dimjump.data :as data :refer [constants]]))

(defrecord Exit
  [id x y w h min-x max-y min-y speed move-x move-y fade-cycle background]
  quadrangle/Quadrangle

  (draw [{:keys [fade-cycle]}]
    (let [{:keys [alpha]
           :or {alpha 255}} fade-cycle]
      (q/with-fill (conj (constants :exit-color) alpha)
        (q/rect x (- y h) w h))))

  (on-collision [_ _ state]
    (assoc state :phase 1)))
