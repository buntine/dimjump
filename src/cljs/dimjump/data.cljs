(ns dimjump.data)

(defn rect [x w h offset]
  "Returns set of vertices for given rectangle"
  [[x (- (+ h offset))]
   [(+ x w) (- (+ h offset))]
   [(+ x w) (- offset)]
   [x (- offset)]])

(defn block
  ([x w h] (block x w h 0))
  ([x w h offset] (block x w h 0 (rect x w h 0)))
  ([x w h offset vertices]
    {:x x :w w :h h :offset offset :vertices vertices}))

(def levels
  [[(block 200 20 20)
    (block 400 20 30)
    (block 600 30 20)]
   [(block 160 20 20)
    (block 360 20 20)
    (block 500 20 20)
    (block 660 100 10 27)]
   [(block 120 20 20)
    (block 300 20 20)
    (block 400 20 20)
    (block 520 20 30)
    (block 700 35 15)]
  ])

; Example:
; (block 340  40 25 0 [[340 -18] [350 -18] [350 -25] [370 -25] [370 -18] [380 -18] [380 0] [340 0]])
