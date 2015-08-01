/*Ryan Backa
 * AVFMDV 1507
 * Project 3
 */

var ui = require("win");

if (Ti.Network.Online){
	var cloud = require("cloud");
	cloud.loginCloud();
}else{
	alert("Please enable Network");
	//load from local
	var 
};

var geo = require("geo");
geo.getGeo();

