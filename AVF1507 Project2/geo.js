var net = require("network");
var getGeo =  function() {
	console.log("Geo Module");
	Ti.Geolocation.purpose = "Your location is needed to get your weather forecast.";
	Ti.Geolocation.getCurrentPosition(function(a){
		console.log(a);
		var lat = a.coords.latitude;
		var lng = a.coords.longitude;
		console.log(lat, lng);
		net.netFnc(lat, lng);
	});	
};

exports.getGeo = getGeo;