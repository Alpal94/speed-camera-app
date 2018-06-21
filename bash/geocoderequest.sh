#!/bin/bash


awk 'BEGIN { 	
	beginurl="https://maps.googleapis.com/maps/api/geocode/json?address="
	endurl="&key=AIzaSyDfrPawxDNRtovwBEbopsuaDIrd-k3KSK0"
	WA = "+western+australia"
	dest = location
	full = locations
} { 
	split($0, a, "\n");	
	fullurl =  beginurl  a[1]  WA endurl	
	print fullurl
	system("/usr/bin/wget "  fullurl)
	system("sleep 10")	
		
} END {
	
}' map_locations.txt

