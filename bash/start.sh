#!/bin/bash
#!/opt/local/bin/
#!/usr/local/bin/


cd /var/www/html/speed/bash
wget -O police.txt https://www.police.wa.gov.au/Traffic/Cameras/Camera-locations 
nodejs /var/www/html/speed/bash/process_dates.js > /var/www/html/speed/bash/dates.txt
sleep 5
./awk.sh < dates.txt > /var/www/html/speed/bash/url.txt 
./get_url.sh < /var/www/html/speed/bash/url.txt
cd ..
#echo "FUCK"
#/usr/local/bin/firebase deploy
#echo "FUCK"
date +"%m-%d-%y" > /var/www/html/speed/bash/latestcopy.txt
#echo "VERY FUCKED"

#read url
#wget -O testing.txt url 

