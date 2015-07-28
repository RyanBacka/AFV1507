var mainWin = Ti.UI.createWindow({
	backgroundColor: "#f0f8ff",
	layout: "vertical"
});

var scrollView = Titanium.UI.createScrollView({
	contentHeight : "auto",
	layout: "vertical"
});
mainWin.add(scrollView);

mainWin.add(scrollView);

var title = Ti.UI.createLabel({
	text: "Events App",
	color: "black",
	top: 20
});
scrollView.add(title);

mainWin.open();

exports.buildUi = buildUi;
