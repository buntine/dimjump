(ns dimjump.data)

(defn block [x w h]
  {:x x :w w :h h})

(def levels
  [[(block 200 20 20)
    (block 400 20 20)]
   [(block 300 20 20)
    (block 500 20 20)
    (block 600 20 20)]])
