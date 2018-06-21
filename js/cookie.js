function buttonSetCookie() {
	document.cookie = "streetname=" + document.getElementById("cookie").value + "; expires=Thu, 01 Jan 2200 12:00:00 UTC";		
}

function processCookie() {
	var name = "streetname=";
	var ca = document.cookie.split(';');	
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while( c.charAt(0)==' ') c = c.substring(1);
		if( c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

setDefault();
function setDefault() {
	if( processCookie() != "" ) {
		street_name = processCookie();
		document.getElementById("cookie").value = street_name;		
	}
}


