(ns dimjump.data)

(defn rect [x w h offset]
  "Returns set of vertices for given rectangle"
  [[x (- (+ h offset))]
   [(+ x w) (- (+ h offset))]
   [(+ x w) (- offset)]
   [x (- offset)]])

(defn block
  ([x w h] (block x w h 0))
  ([x w h offset] (block x w h offset (rect x w h offset)))
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
   [(block 115 8 8)
    (block 123 8 8 8)
    (block 131 8 8 16)
    (block 139 8 8 8)
    (block 147 8 8)
    (block 220 37 9)
    (block 350 25 25)
    (block 420 90 7 27)
    (block 510 100 7 17)
    (block 610 90 7 27)
    (block 740 20 20)]
   [(block 110 20 20)
    (block 200 20 20)
    (block 290 20 20)
    (block 350 100 5 27)
    (block 490 35 12)
    (block 600 20 40)
    (block 740 20 30)]
   [(block 120 140 8 17)
    (block 325 32 31)
    (block 420 200 12 27)
    (block 646 20 20)]
   [(block 120 500 5 27)
    (block 660 30 20)
    (block 760 30 20)]
   [(block 120 20 20)
    (block 190 20 20)
    (block 260 20 20)
    (block 330 20 20)
    (block 400 20 20)
    (block 490 20 20)
    (block 560 20 20)
    (block 630 20 20)
    (block 700 20 20)
    (block 770 20 20)]
  ])

; Example:
; (block 340  40 25 0 [[340 -18] [350 -18] [350 -25] [370 -25] [370 -18] [380 -18] [380 0] [340 0]])
