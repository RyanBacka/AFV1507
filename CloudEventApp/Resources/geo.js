var net = require("network");
var getGeo = function() {
	console.log("Geo Module");
	Ti.Geolocation.purpose = "Your location is needed to get your weather forecast.";
	if (Ti.Platform.Android) {
		var lat = 40.32269605586375;
		var lng = -80.39488412439823;
		net.netFnc(lat, lng);
	} else {
		Ti.Geolocation.getCurrentPosition(function(a){
			console.log(a);
			var lat = a.coords.latitude;
			var lng = a.coords.longitude;
			net.netFnc(lat, lng);
		});
	}
};

exports.getGeo = getGeo; 