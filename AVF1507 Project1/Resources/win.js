var mainWin = Ti.UI.createWindow({
	backgroundColor: "#f0f8ff",
	layout: "vertical"
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

var buildUi = function(current, location, forecast){
	mainWin.add(Ti.UI.createLabel({
		text: location.city + ", " + location.state + " (" + location.zip +")",
		top: 10,
		left: 40
	}));
	var currentView = Ti.UI.createView({
		top: 10,
		left:20,
		width: "90%",
		height: 215,
		backgroundColor: "#fff"
	});
		
		currentView.add(Ti.UI.createLabel({
			text: "Current Weather: ",
			top: 20,
			left: 20
		}));
		currentView.add(Ti.UI.createLabel({
			text: current.weather,
			top: 110,
			left: 60
		}));
		currentView.add(Ti.UI.createLabel({
			text: "Temperature: " + current.temperature_string,
			top: 140,
			left: 60
		}));
		currentView.add(Ti.UI.createImageView({
			image: current.icon_url,
			top: 60,
			left: 90
		}));
		currentView.add(Ti.UI.createLabel({
			text: "Wind: " + current.wind_string,
			top: 170,
			left: 60
		}));
		
	var forecastView = Ti.UI.createView({
		top: 20,
		left:20,
		width: "90%",
		height:320,
		layout: "vertical",
		backgroundColor: "#fff"
	});
	for (x = 0; x<3; x++){
		forecastView.add(Ti.UI.createLabel({
			text: forecast.forecastday[x].title,
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: forecast.forecastday[x].fcttext,
			left: 30,
			top:10
		}));
		};
	mainWin.add(currentView, forecastView);
};
mainWin.add(title);
mainWin.open();

exports.buildUi = buildUi;
exports.buildGeoUi = buildGeoUi;