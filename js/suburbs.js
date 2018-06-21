var suburbs = [];

$.get('data_files/List_of_Perth_suburbs', function(data) {
	var lines = data.split('\n');
	var count = 0;
	$.each(lines, function(lineNo, line) {
		if( line.search("href=") != -1 && line.search("_Western_Australia") != -1) {	
			if( line.search("/wiki/") != -1) suburbs[ count ] = (line.split("/wiki/")[1]).split(",")[0] + "_";
			else suburbs[ count ] = (line.split("title=")[1]).split(",")[0] ;	
			count++;
			return true;
		}
		if( line.search("href=") != -1 && line.search("City of") != -1) {		
			if( line.search(">") != -1) suburbs[ count ] = (line.split(">")[2]).split("<")[0] + "_";	
			count++;
			return true;
		}	
	});
});
