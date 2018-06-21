function processGoogleData(data) {	
	date = new Date();		
	var cameralocations = [];
		
	var caps_day = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]; 

	data = data.split("MONDAY")[2];	
	data = "MONDAY" + data;	
	data = (data.split(caps_day[ date.getDay() ])[1]);
	
	if(date.getDay() != 6) data = data.split(caps_day[ date.getDay() + 1 ])[0];	

	data = data.split('\n\n');  	
	var roads1 = data[4].split('\n'); var suburbs1 = data[5].split('\n');
	var roads2 = data[6].split('\n'); var suburbs2 = data[7].split('\n'); 	
	if(data.length > 10) { var roads3 = data[8].split('\n'); var suburbs3 = data[9].split('\n'); }	
	if(data.length > 12) { var roads4 = data[10].split('\n'); var suburbs4 = data[11].split('\n'); }	
	var cameraNo = 0;
	if(data.length > 6) findCameras( roads1, suburbs1 , 0); if(data.length > 8) findCameras( roads2, suburbs2 , 1);
	if(data.length > 10) findCameras( roads3, suburbs3 , 2); if(data.length > 12) findCameras( roads4, suburbs4 , 3);

	var totalRoads = roads1.length;		
	function findCameras( roads, suburbs, no) {
		$.each(roads, function(roadNo, road) {		
			if(road === street_name || road === street_name + " " || road === street_name + " On/Off Ramps") {
				cameralocations[ cameraNo ] = road + " " +suburbs[ roadNo ];	
				cameraNo++;
			}
		});	
	}
	return cameralocations;
}
