//var net = require("network");
var getGeo =  function() {
	Ti.Geoloaction.purpose = "Your location is needed to get your weather forecast.";
	Ti.Geolocation.getCurrentPosition(function(a){
		console.log(a);
		console.log(JSON.stringify(a.source));
		var lat = a.cords.latitude;
		var lng = a.cords.longitude;
	});
	net.netFnc;
	console.log(lat);
	console.log(lng);
};

exports.getGeo = getGeo;