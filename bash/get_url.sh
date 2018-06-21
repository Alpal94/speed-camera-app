#!/bin/bash
#!/opt/local/bin/
#!/usr/local/bin/

read url
pol="https://www.police.wa.gov.au"
pol+=$url
echo $pol
wget -O /var/www/html/speed/bash/speed_camera_locations $pol 
echo $pol
pdftotext /var/www/html/speed/bash/speed_camera_locations
mv speed_camera_locations.txt /var/www/html/speed/data_files/speed_camera_locations.txt
