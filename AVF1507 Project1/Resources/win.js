var mainWin = Ti.UI.createWindow({
	backgroundColor: "#f0f8ff",
	layout: vertical
});

var buildUi = function(loc){
	console.log(loc.lat);
	mainWin.add(Ti.UI.createLabel({
		text:loc.lat
	}));
	mainWin.add(Ti.UI.createLabel({
		text:loc.lng
	}));
};

mainWin.open();

exports.mainWin = mainWin;