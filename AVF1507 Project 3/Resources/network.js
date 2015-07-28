var netFnc = function(lat, lng){
var geo = require("geo");
var read = require("read");
var url = "http://api.eventful.com/json/events/search?app_key=q2m5J4Gcvzq3Q88F&location="+ lat +"," + lng + "&date=Today"; 
console.log(url);
if (Ti.Network.online) {
	var getData = Ti.Network.createHTTPClient();
	getData.onload = function(b){
		console.log(b);
		var json = JSON.parse(this.responseText);
		var event = {
			event1:json.events.event[1].title,
			city1:json.events.event[1].city_name,
			state1:json.events.event[1].region_abbr,
			zip1:json.events.event[1].postal_code,
			start1:json.events.event[1].start_time,
			desc1:json.events.event[1].description,
			event2:json.events.event[2].title,
			city2:json.events.event[2].city_name,
			state2:json.events.event[2].region_abbr,
			zip2:json.events.event[2].postal_code,
			start2:json.events.event[2].start_time,
			desc2:json.events.event[2].description,

		
		 };
		 
		 var db = Ti.Database.open("eventDB");
			db.execute('CREATE TABLE IF NOT EXISTS eventTbl (id INTEGER PRIMARY KEY, event TEXT)');
			db.execute('DELETE FROM eventTbl');
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.event1 );	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.city1 );
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.state1 );
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.zip1 );
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.start1 );
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.desc1 );
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.event2 );	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.city2);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.state2 );
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.zip2 );
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.start2 );
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.desc2 );
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