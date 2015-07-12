var netFnc = function(lat, lng){
var geo = require("geo");
var url = "http://api.wunderground.com/api/44f4f693e570c8c6/geolookup/conditions/forecast10day/q/" + lat + "," + lng +".json"; 
console.log(url);
if (Ti.Network.online) {
	var getData = Ti.Network.createHTTPClient();
	getData.onload = function(b){
		console.log(b);
		var json = JSON.parse(this.responseText);
		var current = json.current_observation;
		var location = json.location;
		var forecast = json.forecast.txt_forecast;
		console.log(current, location, forecast);
		ui.buildUi(current, location, forecast);
	};
	getData.open("GET", url);
	getData.send();
	} else {
		alert("Network currently unavailable.");
	};
};

exports.netFnc = netFnc;