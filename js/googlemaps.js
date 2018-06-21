var map;	
function initMap() {	
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -31.9535, lng: 115.8570},
		zoom: 9
	});		

	var script = document.createElement('script');
	script.src = 'bash/locations';
	document.getElementsByTagName('head')[0].appendChild(script);

	var geocoder = new google.maps.Geocoder();		

	document.getElementById('button').addEventListener('click', function() {
		getCameraLocations();	
	});

	getCameraLocations();
	function getCameraLocations() {
		if (dataPDF === "") return 0;
		var locations = processGoogleData(dataPDF);
		$.each(locations, function(locationNo, location) {	
			console.log(location);
			geocodeAddress(geocoder,location + ", Western Australia", locationNo);
		});
	}
};

window.eqfeed_callback = function(results) {
	for (var i = 0; i < 100; i++) {
		if(typeof results.data[i].results[0] !== 'undefined') {
			var lat = results.data[i].results[0].geometry.location.lat;
			var lng = results.data[i].results[0].geometry.location.lng;
			var latLng = new google.maps.LatLng(lat,lng);
			var marker = new google.maps.Marker({
				position: latLng,	
				map: map
			});
		} else {
			console.log(results.data[i]);
		}
	}
}



function geocodeAddress(geocoder, address, locationNo) {
	
	geocoder.geocode({'address': address}, function(results, status) {
		if(status === google.maps.GeocoderStatus.OK) {
		map.setCenter(results[0].geometry.location);
		var icon = {
			url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',	
			scaledSize: new google.maps.Size(50,50)
		}
		var marker = new google.maps.Marker({	
			map: map,
			icon: icon, 
			position: results[0].geometry.location
		});	
		} 
	});
}
