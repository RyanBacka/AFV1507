//var net = require("network");
var getGeo =  function() {
	console.log("Geo Module");
	Ti.Geoloaction.purpose = "Your location is needed to get your weather forecast.";
	Ti.Geolocation.getCurrentPosition(function(a){
		console.log(a);
		console.log(JSON.stringify(a.source));
		var userLoc = {
			lat : a.cords.latitude,
			lng : a.cords.longitude
		};
	});
	//win.buildGeoUi;
	net.netFnc;
	console.log(userLoc.lat, userLoc.lng);
};

exports.getGeo = getGeo;