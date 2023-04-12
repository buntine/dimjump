(ns dimjump.sound)

(def load-sound
  (memoize
    (fn [id]
      "Creates an audio elements, inserts it into the DOM and
       returns a reference."
      (let [url (str "/sounds/" (name id) ".ogg")
            sound (.createElement js/document "audio")]
        (set! (.-src sound) url)
        (.setAttribute sound "preload", "auto")
        (.setAttribute sound "controls", "none")
        (.appendChild (.-body js/document) sound)
        sound))))

(defn play-sound 
  ([id] (play-sound id 1.0))
  ([id volume]
    (let [sound (load-sound id)]
      (when (.-paused sound)
        (aset sound "volume" volume)
        (.play sound)))))

(defn pause-sound [id]
  (let [sound (load-sound id)]
    (if (not (.-paused sound))
      (.pause sound))))
