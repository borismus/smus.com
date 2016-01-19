#!/usr/bin/env bash

# Offset: 114 × 209
# Crop size: 1915 × 807
WIDTH=1910
HEIGHT=800
X=114
Y=210

for img in $*
do
  out=`basename $img`
  convert $img \
      -crop ${WIDTH}x${HEIGHT}+${X}+${Y} \
      -resize 50% \
      $out
done
#-resize 89% \
