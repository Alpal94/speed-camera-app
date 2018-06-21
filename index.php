<?php
	file_put_contents("/home/terminator/data/speed/log",$_SERVER['REMOTE_ADDR']." ".date("Y-m-d H:m:s")."\n", FILE_APPEND);
?>
<!DOCTYPE html>
<html>
<body bgcolor="#ADD8E6">

	<script id="input" src=""></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>

	<div style="width:45%;margin:0 auto;"><label style="color: black;margin:0 50;font-weight:bold;font-size:50px" for="name">Mobile Speed App</label></div>
	<div style="padding:10px"></div>
	<div><label style="color: black;padding:0px 20px" for="header">Welcome!  Please remember that fixed site camera locations are not covered, nor are hand held radars, only mobile cameras!</label></div>
	<div><label style="color: black;padding:0px 20px" for="warnings">Be sure to read the clarifications of the app, mistakes will end up giving you a false sense of security.</label></div>

	<div style="padding:20px;"><label style="color:black;font-weight:bold;padding:20px" for="Clarifications">Querying:</label></div>
	<div id="load"><label for="loading" id="loading"></label></div>	
	<div style="padding:20px 0px;">	
	<div>
	<label style="color: black;" for="Street name">StreetName: </label>
	<input id="inputfield" type="text"></input>	
	<button id="button" type="button" onclick="buttoninput()">Submit</button>
	</div>
	<div>
	<label style="color: black" for="CookieSet">Set Default: </label>
	<input id="cookie" type="text"></input>
	<button type="button" onclick="buttonSetCookie()">Set</button>
	</div>
	</div>

	<div style="padding:20px;"><label style="color:black;font-weight:bold;padding:20px" for="Clarifications">Clarifications:</label></div>
	
	<div><label style="color: black;padding:0px 20px" for="warning">Is case sensitive, will give false negatives if you make a typo.   Don't put spaces infront of the first word or after the last.  No double spaces.</label></div>
	<div><label style="color: black;padding:0px 20px" for="moreinfo"> Use Set Default to set a default street which you use often, app will remember and will seek to alert you as soon as you open the app.</label></div>	
	<div><label style="color: black;padding:0px 20px" for="moreinfo"> </label></div>	
	<div style="padding:10px"><label for="space"></label></div>
	<div><label style="color: black;padding:0px 20px;" for="evenmoreinfo">Write the full road name, no abbreviations, for example Tonkin Highway NOT Tonkin HWY.  Or Warwick Road NOT Warwick Rd, NOT Warwick road (words allways start with capitals).</label></div>
	<div style="padding:10px"><label for="space"></label></div>
	<div style="padding:20px;"><label style="color:black;font-weight:bold;padding:20px" for="Map">Map:</label></div>
	<div><label style="color: black;padding:0px 20px" for="mapinfo">Here is a map of all speed camera locations, remembering locations are only approximate and could be anywhere in the specified suburb and road, and locations are for current day from midnight to midnight (Google reversegeocode can fail due to overquerying, so there may be on average around four speed cameras unaccounted for on the map):</label></div> 

	<div align="center" id = "map" style="width:900px;height:500px;margin:0 auto;border:solid"></div>

	<script src="js/set_default.js"></script>
	<script src="js/cookie.js"></script>
	<script src="js/prepURL.js"></script>
	<script src="js/suburbs.js"></script>
	<script src="js/prepPDF.js"></script>
	<script src="js/process_data.js"></script>
	<script src="js/button.js"></script>
	<script src="js/processGoogleData.js"></script>
	<script src="js/googlemaps.js"></script>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR-API-KEY-GOES-HERE&callback=initMap"></script>	
</body>	
</html>
