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
scrollView.add(title);


var buildUiAct = function(tblData){
	locLbl = Ti.UI.createLabel({
		text: tblData[4].netWea + ", " + tblData[5].netWea + " (" + tblData[6].netWea +")",
		font: {fontSize: 25},
		top: 40,
		left: 40
	});
	scrollView.add(locLbl);
	var currentView = Ti.UI.createView({
		top: 80,
		left:20,
		width: "90%",
		height: 215,
		backgroundColor: "#fff"
	});
	scrollView.add(currentView);
		var curLbl = Ti.UI.createLabel({
			text: "Current Weather: ",
			font: {fontSize: 20, fontWeight:"bold"},
			top: 10,
			left: 20
		});
		currentView.add(curLbl);
		var weaLbl = Ti.UI.createLabel({
			text: tblData[0].netWea,
			top: 110,
			left: 60
		});
		currentView.add(weaLbl);
		currentView.add(Ti.UI.createLabel({
			text: "Temperature: " + tblData[1].netWea,
			top: 140,
			left: 60
		}));

		currentView.add(Ti.UI.createImageView({
			image: tblData[2].netWea,
			top: 45,
			left: 90
		}));
		
		currentView.add(Ti.UI.createLabel({
			text: "Wind: " + tblData[3].netWea,
			top: 170,
			left: 60
		}));
		
	
	var forecastView = Ti.UI.createView({
		top: currentView.top + currentView.height + 10,
		left:20,
		width: "90%",
		height:2150,
		layout: "vertical",
		backgroundColor: "#fff"
	});
	scrollView.add(forecastView);
	
		forecastView.add(Ti.UI.createLabel({
			text: tblData[7].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[8].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[9].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[10].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[11].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[12].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text:tblData[13].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[14].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[15].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[16].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[17].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[18].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[19].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[20].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[21].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[22].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[23].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[24].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[25].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[26].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[27].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[28].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[29].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[30].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[31].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[32].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[33].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[34].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[35].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[36].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[37].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[38].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[39].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[40].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[41].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[42].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[43].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[44].netWea,
			left: 30,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[45].netWea,
			font:{fontSize: 20, fontWeight: "bold"},
			left: 20,
			top:10
		}));
		forecastView.add(Ti.UI.createLabel({
			text: tblData[46].netWea,
			left: 30,
			top:10
		}));
	
};

mainWin.open();

exports.buildUiAct = buildUiAct;
