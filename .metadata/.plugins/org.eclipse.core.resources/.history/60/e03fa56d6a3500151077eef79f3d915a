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
	console.log(JSON.stringify(tblData));
 var a=0;
 for (x=0; x<10; x++){
 	
	scrollView.add(Ti.UI.createLabel({
		text: tblData[a].netWea,
		font: {fontSize: 30, fontWeight: "bold"},
		color: "black",
		top: 10,
		left: 40
	}));
	a++;
	scrollView.add(Ti.UI.createLabel({
		text: tblData[a].netWea,
		font: {fontSize: 18},
		color: "black",
		top: 5,
		left: 60
	}));
	a++;
	scrollView.add(Ti.UI.createLabel({
		text: tblData[a].netWea,
		font: {fontSize: 14},
		color: "black",
		top:5,
		left: 60
	}));
	a++;
	scrollView.add(Ti.UI.createLabel({
		text: tblData[a++].netWea +", "+ tblData[a++].netWea +" ("+tblData[a++].netWea+ ")",
		font: {fontSize: 14},
		color: "black",
		top: 5,
		left: 60
	}));
	a++;
	scrollView.add(Ti.UI.createLabel({
		text: tblData[a].netWea,
		font: {fontSize: 14},
		color: "black",
		top: 5,
		left: 60
	}));
	
};
};

mainWin.open();

exports.buildUi = buildUi;
