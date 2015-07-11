var mainWin = Ti.UI.createWindow({
	backgroundColor: "#f0f8ff",
	/*layout: vertical*/
});

var title = Ti.UI.createLabel({
	text: "Weather App",
	top: 20
});

var buildGeoUi = function(lat, lng){
	console.log(lat, lng);
	mainWin.add(Ti.UI.createLabel({
		text:"Latitude: " + lat,
		top:50
	}));
	mainWin.add(Ti.UI.createLabel({
		text:"Longitude: " + lng,
		top:70
	}));
};

var buildUi = function(forecast, location){
	mainWin.add(Ti.UI.createLabel({
		text: location.city + ", " + location.state + " (" + location.zip +")",
		top: 40,
		left: 40
	}));
	var currentView = Ti.UI.createView({
		top: 80,
		left:40,
		width: 500,
		height: 215,
		backgroundColor: "#fff"
	});
		
		currentView.add(Ti.UI.createLabel({
			text: "Current Weather: ",
			top: 20,
			left: 20
		}));
		currentView.add(Ti.UI.createLabel({
			text: forecast.weather,
			top: 110,
			left: 60
		}));
		currentView.add(Ti.UI.createLabel({
			text: "Temperature: " + forecast.temperature_string,
			top: 140,
			left: 60
		}));
		currentView.add(Ti.UI.createImageView({
			image: forecast.icon_url,
			top: 60,
			left: 90
		}));
		currentView.add(Ti.UI.createLabel({
			text: "Wind: " + forecast.wind_string,
			top: 170,
			left: 60
		}));
	/*mainWin.add(Ti.UI.createLabel({
		text: forecast.conditions,
		top: 60,
		left: 20
	}));
	mainWin.add(Ti.UI.createLabel({
		text: forecast.conditions,
		top: 60,
		left: 60
	}));*/
	mainWin.add(currentView);
};
mainWin.add(title);
mainWin.open();

exports.buildUi = buildUi;
exports.buildGeoUi = buildGeoUi;