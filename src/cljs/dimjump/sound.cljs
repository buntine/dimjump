(ns dimjump.sound
  (:require [dimjump.data :as data :refer [constants]]))

(def load-sound
  (memoize
    (fn [id]
      "Creates an audio elements, inserts it into the DOM and
       returns a reference."
      (let [url (str "/sounds/" (name id) ".wav")
            sound (.createElement js/document "audio")]
        (set! (.-src sound) url)
        (.setAttribute sound "preload", "auto")
        (.setAttribute sound "controls", "none")
        (.appendChild (.-body js/document) sound)
        sound))))

(defn play-sound [id]
  (let [sound (load-sound id)]
    (.play sound)))
