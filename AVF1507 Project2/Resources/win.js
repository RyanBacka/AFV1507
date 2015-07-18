var mainWin = Ti.UI.createWindow({
	backgroundColor: "#f0f8ff"
});

var scrollView = Titanium.UI.createScrollView({
	contentHeight : "auto"
});
mainWin.add(scrollView);

var title = Ti.UI.createLabel({
	text: "Weather App",
	top: 20
});
//mainWin.add(title);
scrollView.add(title);
var buildUi = function(netWea){
	locLbl = Ti.UI.createLabel({
		text: netWea.location.city + ", " + netWea.location.state + " (" + netWea.location.zip +")",
		font: {fontSize: 25},
		top: 40,
		left: 40
	});
	//mainWin.add(locLbl);
	scrollView.add(locLbl);
	var currentView = Ti.UI.createView({
		top: 80,
		left:20,
		width: "90%",
		height: 215,
		backgroundColor: "#fff"
	});
	//mainWin.add(currentView);
	scrollView.add(currentView);
		var curLbl = Ti.UI.createLabel({
			text: "Current Weather: ",
			font: {fontSize: 20, fontWeight:"bold"},
			top: 10,
			left: 20
		});
		currentView.add(curLbl);
		var weaLbl = Ti.UI.createLabel({
			text: netWea.wea,
			top: 110,
			left: 60
		});
		currentView.add(weaLbl);
		currentView.add(Ti.UI.createLabel({
			text: "Temperature: " + netWea.tmp,
			top: 140,
			left: 60
		}));

		currentView.add(Ti.UI.createImageView({
			image: netWea.icon,
			top: 45,
			left: 90
		}));
		
		currentView.add(Ti.UI.createLabel({
			text: "Wind: " + netWea.wind,
			top: 170,
			left: 60
		}));
		
	
	var forecastView = Ti.UI.createView({
		top: currentView.top + currentView.height + 10,
		left:20,
		width: "90%",
		height:1500,
		layout: "vertical",
		backgroundColor: "#fff"
	});
	//mainWin.add(forecastView);
	scrollView.add(forecastView);
	
	for (x = 0; x<14; x++){
		forecastView.add(Ti.UI.createLabel({
			text: netWea.forecast.forecastday[x].title,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: netWea.forecast.forecastday[x].fcttext,
			left: 30,
			top:10
		}));
		};
	
};
mainWin.open();

exports.buildUi = buildUi;