#!/usr/bin/env bash

OUT_DIR=crops
mkdir -p $OUT_DIR
for mp4 in videos/*
do
  basename=`basename $mp4 .mp4`
  cropped=$OUT_DIR/$basename-cropped.mp4
  ffmpeg -i $mp4 -vf "crop=iw:420:0:800" -r 30 $cropped
  gifify -n -r 10 -p 540:210 -o $basename $cropped

  #ffmpeg -i $mp4 -vf "crop=iw:420:0:800,scale=iw/2:ih/2" -pix_fmt rgb24 -r 10 -f gif - |\
  #  gifsicle --optimize=3 --delay=8 > $cropped
done
