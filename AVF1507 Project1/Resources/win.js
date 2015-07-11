var mainWin = Ti.UI.createWindow({
	backgroundColor: "#f0f8ff",
	/*layout: vertical*/
});

var title = Ti.UI.createLabel({
	text: "Weather App",
	top: 20
});

var geo = require("geo");
var net = require("network");

var buildGeoUi = function(userLoc){
	console.log(lat, lng);
	mainWin.add(Ti.UI.createLabel({
		text:"Latitude: " + userLoc.lat,
		top:35
	}));
	mainWin.add(Ti.UI.createLabel({
		text:"Longitude: " + userLoc.lng,
		top:15
	}));
	mainWin.add(latLabel, lngLabel);
};

var buildUi = function(weatherData){
	mainWin.add(Ti.UI.createLabel({
		text: net.forecast.simpleforecast.forecastday.high.fahrenheit,
		top: 20,
		left: 20
	}));
	mainWin.add(Ti.UI.createLabel({
		text: net.forecast.simpleforecast.forecastday.low.fahrenheit,
		top: 20,
		left: 60
	}));
	mainWin.add(Ti.UI.createLabel({
		text: net.location.city,
		top: 40,
		left: 20
	}));
	mainWin.add(Ti.UI.createLabel({
		text: net.location.state,
		top:40,
		left: 60
	}));
	mainWin.add(Ti.UI.createLabel({
		text: net.forecast.simpleforecast.forecastday.date.pretty,
		top: 60,
		left: 20
	}));
	mainWin.add(Ti.UI.createLabel({
		text: net.forecast.simpleforecast.forecastday.conditions,
		top: 60,
		left: 20
	}));
	mainWin.add(Ti.UI.createImageView({
		image: net.forecast.simpleforecast.forecastday.icon_url,
		top: 60,
		left: 60
	}));
};
mainWin.add(title);
mainWin.open();

exports.buildUi = buildUi;
exports.buildGeoUi = buildGeoUi;