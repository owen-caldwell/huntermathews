#!/bin/bash

# Directory containing the images
dir="images/asketch/color"

# Loop over each image in the directory
for file in "$dir"/*; do
  # Convert the image to webp and set the DPI to 72
  convert "$file" -density 72 -units PixelsPerInch "${file%.*}.webp"

  # Create copies with widths of 1024, 640, and 320, maintaining aspect ratio
  convert "${file%.*}.webp" -resize 1024x "${file%.*}_1024.webp"
  convert "${file%.*}.webp" -resize 640x "${file%.*}_640.webp"
  convert "${file%.*}.webp" -resize 320x "${file%.*}_320.webp"
done