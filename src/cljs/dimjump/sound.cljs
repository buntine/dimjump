(ns dimjump.sound
  (:require [dimjump.data :as data :refer [constants]]))

(defn load-sound [url]
  "Creates an audio elements, inserts it into the DOM and
   returns a reference."
  (let [sound (.createElement js/document "audio")]
    (set! (.-src sound) url)
    (.setAttribute sound "preload", "auto")
    (.setAttribute sound "controls", "none")
    (.appendChild (.-body js/document) sound)
    sound))

(defn play-sound [id]
  (.play (get-in constants [:sound id])))
