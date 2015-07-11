var netFnc = function(){
var geo = require("geo");
var url = "http://api.wunderground.com/api/44f4f693e570c8c6/geolookup/conditions/forecast/q/" + geo.userLoc.lat + "," + geo.userLoc.lng + ".json"; 

if (Ti.Network.online) {
	var getData = Ti.Network.createHTTPClient();
	getData.onload = function(b){
		console.log(b);
		var json = JSON.parse(this.responseText);
		var weatherData = {
			forecast : json.forecast,
			location : json.location
		};
		console.log(forecast, location);
		ui.buildUi;
	};
		getData.open("GET", url);
		getData.send();
	
	} else {
		alert("Network currently unavailable.");
	};
};

exports.netFnc = netFnc;