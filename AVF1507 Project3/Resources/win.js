var mainWin = Ti.UI.createWindow({
	backgroundColor: "#f0f8ff",
	layout: "vertical"
});

var scrollView = Titanium.UI.createScrollView({
	contentHeight : "auto",
	layout: "vertical"
});
mainWin.add(scrollView);

var title = Ti.UI.createLabel({
	text: "Events this Month",
	font:{fontSize: 30, fontWeight:"bold"},
	color: "black",
	top: 20
});
scrollView.add(title);

var buildUi = function(tblData){
	for (x=0; x<10; x++){
	scrollView.add(Ti.UI.createLabel({
		text: tblData.event1,
		font: {fontSize: 25, fontWeight: "bold"},
		color: "black",
		top: 2,
		left: 40
	}));
	scrollView.add(Ti.UI.createLabel({
		text: tblData.venueNm1,
		font: {fontSize: 20},
		color: "black",
		top: 2,
		left: 40
	}));
	scrollView.add(Ti.UI.createLabel({
		text: tblData.venueAd1,
		font: {fontSize: 14},
		color: "black",
		top:2,
		left: 40
	}));
	scrollView.add(Ti.UI.createLabel({
		text: tblData.city1 +", "+ tblData.state1 +" ("+tblData.zip1+ ")",
		font: {fontSize: 14},
		color: "black",
		top: 2,
		left: 40
	}));
	scrollView.add(Ti.UI.createLabel({
		text: tblData.start1,
		font: {fontSize: 25},
		color: "black",
		top: 2,
		left: 40
	}));
	
	
	
		};
};

mainWin.open();

exports.buildUi = buildUi;