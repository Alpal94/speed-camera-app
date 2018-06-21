#!/bin/bash

cd /var/www/html/speed/bash/
echo "HELLO WORLD"
./geocode > map_locations.txt
./geocoderequest.sh 
rm locations



echo "eqfeed_callback({ \"data\" : [ " > locations

find . -name 'json*' -exec ./echo.sh {} \;
find . -name 'json*' -exec cat {} >> locations \; 
find . -name 'json*' -exec rm -rf {} \; 

echo "]});" >> locations
