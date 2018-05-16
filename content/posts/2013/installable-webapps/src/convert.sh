#!/usr/bin/env sh

for img in *.png
do
  convert $img -resize 30% ../$img
done
