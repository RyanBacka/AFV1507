var netFnc = function(lat, lng){
var geo = require("geo");
var read = require("read");
var url = "http://api.eventful.com/json/events/search?app_key=q2m5J4Gcvzq3Q88F&location="+ lat +"," + lng + "&within=20&units=miles&date=thismonth&c=music"; 
console.log(url);
if (Ti.Network.online) {
	var getData = Ti.Network.createHTTPClient();
	getData.onload = function(b){
		console.log(b);
		var json = JSON.parse(this.responseText);
		var event = [{
			event:json.events.event[0].title,
			venueNm:json.events.event[0].venue_name,
			venueAd:json.events.event[0].venue_address,
			city:json.events.event[0].city_name,
			state:json.events.event[0].region_abbr,
			zip:json.events.event[0].postal_code,
			start:json.events.event[0].start_time
		},{	
			event:json.events.event[1].title,
			venueNm:json.events.event[1].venue_name,
			venueAd:json.events.event[1].venue_address,
			city:json.events.event[1].city_name,
			state:json.events.event[1].region_abbr,
			zip:json.events.event[1].postal_code,
			start:json.events.event[1].start_time
		},{
			event:json.events.event[2].title,
			venueNm:json.events.event[2].venue_name,
			venueAd:json.events.event[2].venue_address,
			city:json.events.event[2].city_name,
			state:json.events.event[2].region_abbr,
			zip:json.events.event[2].postal_code,
			start:json.events.event[2].start_time
		},{
			event:json.events.event[3].title,
			venueNm:json.events.event[3].venue_name,
			venueAd:json.events.event[3].venue_address,
			city:json.events.event[3].city_name,
			state:json.events.event[3].region_abbr,
			zip:json.events.event[3].postal_code,
			start:json.events.event[3].start_time
		},{	
			event:json.events.event[4].title,
			venueNm:json.events.event[4].venue_name,
			venueAd:json.events.event[4].venue_address,
			city:json.events.event[4].city_name,
			state:json.events.event[4].region_abbr,
			zip:json.events.event[4].postal_code,
			start:json.events.event[4].start_time
		},{	
			event:json.events.event[5].title,
			venueNm:json.events.event[5].venue_name,
			venueAd:json.events.event[5].venue_address,
			city:json.events.event[5].city_name,
			state:json.events.event[5].region_abbr,
			zip:json.events.event[5].postal_code,
			start:json.events.event[5].start_time
		},{	
			event:json.events.event[6].title,
			venueNm:json.events.event[6].venue_name,
			venueAd:json.events.event[6].venue_address,
			city:json.events.event[6].city_name,
			state:json.events.event[6].region_abbr,
			zip:json.events.event[6].postal_code,
			start:json.events.event[6].start_time
		},{	
			event:json.events.event[7].title,
			venueNm:json.events.event[7].venue_name,
			venueAd:json.events.event[7].venue_address,
			city:json.events.event[7].city_name,
			state:json.events.event[7].region_abbr,
			zip:json.events.event[7].postal_code,
			start:json.events.event[7].start_time
		},{	
			event:json.events.event[8].title,
			venueNm:json.events.event[8].venue_name,
			venueAd:json.events.event[8].venue_address,
			city:json.events.event[8].city_name,
			state:json.events.event[8].region_abbr,
			zip:json.events.event[8].postal_code,
			start:json.events.event[8].start_time
		},{	
			event:json.events.event[9].title,
			venueNm:json.events.event[9].venue_name,
			venueAd:json.events.event[9].venue_address,
			city:json.events.event[9].city_name,
			state:json.events.event[9].region_abbr,
			zip:json.events.event[9].postal_code,
			start:json.events.event[9].start_time,
		}];
		 
		 
		 var db = Ti.Database.open("eventDB");
			db.execute('CREATE TABLE IF NOT EXISTS eventTbl (id INTEGER PRIMARY KEY, event TEXT)');
			db.execute('DELETE FROM eventTbl');
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event[0] );	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event[1] );	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event[2]);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event[3] );	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event[4]);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event[5] );	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event[6] );	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event[7]);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event[8] );	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event[9]);
			
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