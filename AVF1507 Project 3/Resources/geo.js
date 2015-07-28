var net = require("network");
var getGeo = function() {
	console.log("Geo Module");
	Ti.Geolocation.purpose = "Your location is needed to get your weather forecast.";
	if (Ti.Platform.Android) {
		var lat = 37.78583526611328;
		var lng = -122.4064178466797;
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