var netFnc = function(lat, lng){
var geo = require("geo");
var read = require("read");
var url = "http://api.wunderground.com/api/44f4f693e570c8c6/geolookup/conditions/forecast10day/q/" + lat +","+lng +".json"; 
console.log(url);
if (Ti.Network.online) {
	var getData = Ti.Network.createHTTPClient();
	getData.onload = function(b){
		console.log(b);
		var json = JSON.parse(this.responseText);
		console.log(json);
		var netWea = {
		 wea : json.current_observation.weather,
		 tmp: json.current_observation.temperature_string,
		 icon: json.current_observation.icon_url,
		 wind: json.current_observation.wind_string,
		 city : json.location.city,
		 state : json.location.state,
		 zip : json.location.zip,
		 title1 : json.forecast.txt_forecast.forecastday[0].title,
		 title2 : json.forecast.txt_forecast.forecastday[1].title,
		 title3 : json.forecast.txt_forecast.forecastday[2].title,
		 title4 : json.forecast.txt_forecast.forecastday[3].title,
		 title5 : json.forecast.txt_forecast.forecastday[4].title,
		 title6 : json.forecast.txt_forecast.forecastday[5].title,
		 title7 : json.forecast.txt_forecast.forecastday[6].title,
		 title8 : json.forecast.txt_forecast.forecastday[7].title,
		 title9 : json.forecast.txt_forecast.forecastday[8].title,
		 title10 : json.forecast.txt_forecast.forecastday[9].title,
		 title11 : json.forecast.txt_forecast.forecastday[10].title,
		 title12 : json.forecast.txt_forecast.forecastday[11].title,
		 title13 : json.forecast.txt_forecast.forecastday[12].title,
		 title14 : json.forecast.txt_forecast.forecastday[13].title,
		 title15 : json.forecast.txt_forecast.forecastday[14].title,
		 title16 : json.forecast.txt_forecast.forecastday[15].title,
		 title17 : json.forecast.txt_forecast.forecastday[16].title,
		 title18 : json.forecast.txt_forecast.forecastday[17].title,
		 title19 : json.forecast.txt_forecast.forecastday[18].title,
		 title20 : json.forecast.txt_forecast.forecastday[19].title,
		 text1 : json.forecast.txt_forecast.forecastday[0].fcttext,
		 text2 : json.forecast.txt_forecast.forecastday[1].fcttext,
		 text3 : json.forecast.txt_forecast.forecastday[2].fcttext,
		 text4 : json.forecast.txt_forecast.forecastday[3].fcttext,
		 text5 : json.forecast.txt_forecast.forecastday[4].fcttext,
		 text6 : json.forecast.txt_forecast.forecastday[5].fcttext,
		 text7 : json.forecast.txt_forecast.forecastday[6].fcttext,
		 text8 : json.forecast.txt_forecast.forecastday[7].fcttext,
		 text9 : json.forecast.txt_forecast.forecastday[8].fcttext,
		 text10 : json.forecast.txt_forecast.forecastday[9].fcttext,
		 text11 : json.forecast.txt_forecast.forecastday[10].fcttext,
		 text12 : json.forecast.txt_forecast.forecastday[11].fcttext,
		 text13 : json.forecast.txt_forecast.forecastday[12].fcttext,
		 text14 : json.forecast.txt_forecast.forecastday[13].fcttext,
		 text15 : json.forecast.txt_forecast.forecastday[14].fcttext,
		 text16 : json.forecast.txt_forecast.forecastday[15].fcttext,
		 text17 : json.forecast.txt_forecast.forecastday[16].fcttext,
		 text18 : json.forecast.txt_forecast.forecastday[17].fcttext,
		 text19 : json.forecast.txt_forecast.forecastday[18].fcttext,
		 text20 : json.forecast.txt_forecast.forecastday[19].fcttext,
		 };
		 
		 var db = Ti.Database.open("weatherDB");
			db.execute('CREATE TABLE IF NOT EXISTS weatherTbl (id INTEGER PRIMARY KEY, netWea TEXT)');
			db.execute('DELETE FROM weatherTbl');
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.wea );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.tmp );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.icon );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.wind );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.city );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.state );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.zip);
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title1 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text1 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title2 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text2 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title3 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text3 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title4 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text4 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title5 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text5 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title6 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text6 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title7 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text7 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title8 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text8 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title9 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text9 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title10 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text10 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title11 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text11 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title12 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text12 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title13 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text13 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title14 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text14 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title15 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text15 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title16 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text16 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title17 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text17 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title18 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text18 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title19 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text19 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.title20 );
			db.execute('INSERT INTO weatherTbl (netWea) VALUES (?)', netWea.text20 );		
		db.close();
		read.readDb();
		
		
	};
	getData.open("GET", url);
	getData.send();
	} else {
		alert("Network currently unavailable.");
		read.readDb();
	};
};

exports.netFnc = netFnc;