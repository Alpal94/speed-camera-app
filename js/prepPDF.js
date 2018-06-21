var dataPDF = "";
$.get('data_files/speed_camera_locations.txt', function(data) { dataPDF = data; processData(dataPDF, street_name); });
