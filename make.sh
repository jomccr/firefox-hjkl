#!/bin/bash

# GNU make is unavailable on my system at the moment, 
# so I have built this simple build script instead.


if [ -f hjkl.zip ] 
then 
  rm hjkl.zip
fi

echo 
echo "Building the zip file..."
echo 

zip -r ./hjkl.zip "./*.js" "./icons/*.png" ./manifest.json ./LICENSE.txt

echo 
echo "Listing the zip file..."
echo 

unzip -l ./hjkl.zip

echo 
echo "Build complete, sha256: $(md5sum hjkl.zip)"
echo 



