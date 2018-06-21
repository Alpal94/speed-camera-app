var d = new Date();
var webURL = "https://www.police.wa.gov.au";
var subURL = "";

var isEndOfWeek = 0;

var day = d.getDate();
var weekday = d.getDay();
if(weekday === 0) isEndOfWeek = 7; 
d.setDate(day - weekday + 1 - isEndOfWeek);

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var month = d.getMonth() + 1;
if(month < 10) month = "0" + month.toString();
else month = month.toString();

var day2 = d.getDate();
if(day2 < 10) day2 = "0" + day2.toString();
else day2 = day2.toString();

d.setDate(day + 6 - weekday + 1 - isEndOfWeek);


var day3 = d.getDate();
if(day3 < 10) day3 = "0" + day3.toString();
else day3 = day3.toString();

var month1 = d.getMonth() + 1;
if(month1 === parseInt(month) && (parseInt(day3) < parseInt(day2))) month1++;
var month_name = monthNames[ parseInt(month1) - 1]; 
if(month1 < 10) month1 = "0" + month1.toString();
else month1 = month1.toString();

