function processData(data, street_name) {	
	

	date = new Date();	
	var noSpeedTraps = 0; 
	var suburbname = "";
	var cameralocations = [];
	
	var day_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var caps_day = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]; 

	data = data.split("MONDAY")[2];	
	data = "MONDAY" + data;	
	data = (data.split(caps_day[ date.getDay() ])[1]);
	
	if(date.getDay() != 6) data = data.split(caps_day[ date.getDay() + 1 ])[0];	

	data = data.split('\n\n');  	
/*	
	var roads = new Array(data.length); var suburbs = new Array(data.length);

	//console.log(data);
	for(var i = 0; i < data.length; i++) {
		if(i%2 == 0) roads[Math.floor(i/2)] = data[i];
		if(i%2 == 1) suburbs[Math.floor(i/2)] = data[i];
	}
*/
	
	var roads1; var roads2; var roads3; var roads4;
	var suburbs1; var suburbs2; var suburbs3; var suburbs4;
	console.log(data);
	roads1 = data[4].split('\n'); suburbs1 = data[5].split('\n');
	roads2 = data[6].split('\n'); suburbs2 = data[7].split('\n'); 			

	if(data.length > 10) { roads3 = data[8].split('\n'); suburbs3 = data[9].split('\n'); console.log("WORKING WORKING"); console.log(roads3);}
	if(data.length > 12) { roads4 = data[10].split('\n'); suburbs4 = data[11].split('\n'); console.log("WORKING OVERTIME"); console.log(roads4);}	

	if(data.length > 6) findCameras( roads1, suburbs1 ); if(data.length > 8) findCameras( roads2, suburbs2 );
	if(data.length > 10)findCameras( roads3, suburbs3 ); if(data.length > 12) findCameras( roads4, suburbs4 );	
	

	//console.log(suburbs);
	//console.log(roads);
	//findCameras( roads, suburbs);
	function findCameras( roads, suburbs) {	
		$.each(roads, function(roadNo, road) {	
			//cameralocations[roadNo] = road;
			if(road === street_name || road === street_name + "  " || road === street_name + " On/Off Ramps") {	
				
				if(noSpeedTraps) suburbname += ", " + suburbs[ roadNo ];	
				else suburbname = " " + suburbs[ roadNo ];	
				if( road === street_name + " On/Off Ramps" ) suburbname += " on an on/off ramp ";
				console.log(road);

				noSpeedTraps++;
			}	
		});		
		//getCameraLocations(cameralocations);	
	}







	if(street_name != "") {
		if(noSpeedTraps) alert("There is a camera on " + street_name + "!  WARNING WARNING THERE ARE " + noSpeedTraps + " cameras in " + suburbname + " !\n\nDon't forget that today is " + day_of_week[ date.getDay()] + "!!!");



		else alert("You are safe today don't worry!\n\nDon't forget that today is " + day_of_week[ date.getDay()] + "!!!");
	}
}
