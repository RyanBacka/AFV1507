var mainWin = Ti.UI.createWindow({
	backgroundColor: "#f0f8ff",
	/*layout: vertical*/
});

var buildUi = function(lat, lng){
	console.log(lat, lng);
	mainWin.add(Ti.UI.createLabel({
		text:"Latitude: " + lat,
		top:30
	}));
	mainWin.add(Ti.UI.createLabel({
		text:"Longitude: " + lng,
		top:15
	}));
	
};

mainWin.open();

exports.mainWin = mainWin;