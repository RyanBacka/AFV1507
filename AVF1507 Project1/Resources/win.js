var mainWin = Ti.UI.createWindow({
	backgroundColor: "#f0f8ff",
	layout: "vertical"
});

var title = Ti.UI.createLabel({
	text: "Weather App",
	top: "20dp"
});
mainWin.add(title);


var buildGeoUi = function(lat, lng){
	console.log(lat, lng);
	mainWin.add(Ti.UI.createLabel({
		text:"Latitude: " + lat,
		top:"50dp"
	}));
	mainWin.add(Ti.UI.createLabel({
		text:"Longitude: " + lng,
		top:"70dp"
	}));
};

var buildUi = function(netWea){
	locLbl = Ti.UI.createLabel({
		text: netWea.location.city + ", " + netWea.location.state + " (" + netWea.location.zip +")",
		top: "10dp",
		left: "40dp"
	});
	mainWin.add(locLbl);
	var currentView = Ti.UI.createView({
		top: "10dp",
		left:"20dp",
		width: "90%",
		height: "215dp",
		backgroundColor: "#fff"
	});
	mainWin.add(currentView);
		var curLbl = Ti.UI.createLabel({
			text: "Current Weather: ",
			top: "20dp",
			left: "20dp"
		});
		currentView.add(curLbl);
		var weaLbl = Ti.UI.createLabel({
			text: netWea.current.weather,
			top: "110dp",
			left: "60dp"
		});
		currentView.add(weaLbl);
		var tmpLbl = Ti.UI.createLabel({
			text: "Temperature: " + netWea.current.temperature_string,
			top: "140dp",
			left: "60dp"
		});
		currentView.add(tmpLbl);
		var weaIcon = Ti.UI.createImageView({
			image: netWea.current.icon_url,
			top: "60dp",
			left: "90dp"
		});
		currentView.add(weaIcon);
		var windLbl = Ti.UI.createLabel({
			text: "Wind: " + netWea.current.wind_string,
			top: "170dp",
			left: "60dp"
		});
		currentView.add(windLbl);
	
	var forecastView = Ti.UI.createView({
		top: "20dp",
		left:"20dp",
		width: "90%",
		height:"320dp",
		layout: "vertical",
		backgroundColor: "#fff"
	});
	mainWin.add(forecastView);
	for (x = 0; x<3; x++){
		forecastView.add(Ti.UI.createLabel({
			text: netWea.forecast.forecastday[x].title,
			left: "20dp",
			top:"10dp"
		}));
		forecastView.add(Ti.UI.createLabel({
			text: netWea.forecast.forecastday[x].fcttext,
			left: "30dp",
			top:"10dp"
		}));
		};
	
};
mainWin.open();

exports.buildUi = buildUi;
exports.buildGeoUi = buildGeoUi;