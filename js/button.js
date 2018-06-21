function buttoninput() {	
	if(dataPDF === "") { street_name = document.getElementById("inputfield").value; alert("Please wait a bit ... "); } 
	else { street_name = document.getElementById("inputfield").value; processData(dataPDF, street_name);}	
}

//setTimeout(function() { if(dataPDF ===  "") alert("Please reload your browser, a random error occured!"); }, 5000);
