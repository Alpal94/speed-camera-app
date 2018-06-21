# Speed Camera App
Speed camera web application which displays all the mobile speed cameras in Perth, Western Australia on a map. 
Check it out at http://theterminator.hopto.org/speed
## Getting Started
## Prerequisites
This project requires a linux machine as it uses bash scripting.  The project is setup to work from the /var/www/html/speed directory.
Requirements:
```
apt-get install pdftotext
apt-get install wget
apt-get install gcc
apt-get install php7.0
apt-get install nodejs
apt-get install apache2

```
## Setup
- You will need an API key from google, replace all 'YOUR-API-KEY-GOES-HERE' with your API Key.
- Set up a crontab to run the scraper.  
  - Reverse geocoding is run once a day before midnight in preperation for the next day (an 'emergency' geocode is run after midnight to ensure everything is OK)
  - The PDF is fetched from the police website every Sunday and converted to text.  
  - Example Crontab:
```
00 22 * * 7 /var/www/html/speed/bash/start.sh

40 23 * * * /var/www/html/speed/bash/geocode.sh >> /var/log/speedapp.log

50 23 * * * /var/www/html/speed/bash/geocode.sh >> /var/log/speedapp.log

01 00 * * * /var/www/html/speed/bash/emergencygeocode.sh >> /var/log/speedapp.log
```
## About the program
The speed camera app uses c++, bash scripts and nodejs.  There is a lot of redundant javascript code which needs to be cleaned up. 
Most of the work is done on the back end.  Once a week the program reads the HTML of the police website and works out the URL of the speed camera locations (the URL changes every week, with random changes not simply just the date) and this is converted to a text document using pdftotext.
Every day the backend then reads the text document with the speed camera locations and parses it, resulting in streetname+suburb location results for a given day of the week. This is then formatted into a URL to send to google for reverse geocode results.  These results are kept in a single js file, assigned to a function.
The next step is client side, all that is necessary is to read the geocode results and place the markers on the map.  Additional functionality is provided by way of a street lookup, and an alert can be set on page open to warn of speed camera locations on a particular street (uses cookies).
