var netFnc = function(lat, lng){
var geo = require("geo");
var read = require("read");
var url = "http://api.eventful.com/json/events/search?app_key=q2m5J4Gcvzq3Q88F&location="+ lat +"," + lng + "&within=20&units=miles&date=thismonth&c=music.json"; 
console.log(url);
if (Ti.Network.online) {
	var getData = Ti.Network.createHTTPClient();
	getData.onload = function(b){
		console.log(b);
		var json = JSON.parse(this.responseText);
		var event = {
			event1:json.events.event[0].title,
			venueNm1:json.events.event[0].venue_name,
			venueAd1:json.events.event[0].venue_address,
			city1:json.events.event[0].city_name,
			state1:json.events.event[0].region_abbr,
			zip1:json.events.event[0].postal_code,
			start1:json.events.event[0].start_time,
			event2:json.events.event[1].title,
			venueNm2:json.events.event[1].venue_name,
			venueAd2:json.events.event[1].venue_address,
			city2:json.events.event[1].city_name,
			state2:json.events.event[1].region_abbr,
			zip2:json.events.event[1].postal_code,
			start2:json.events.event[1].start_time,
			event3:json.events.event[2].title,
			venueNm3:json.events.event[2].venue_name,
			venueAd3:json.events.event[2].venue_address,
			city3:json.events.event[2].city_name,
			state3:json.events.event[2].region_abbr,
			zip3:json.events.event[2].postal_code,
			start3:json.events.event[2].start_time,
			event4:json.events.event[3].title,
			venueNm4:json.events.event[3].venue_name,
			venueAd4:json.events.event[3].venue_address,
			city4:json.events.event[3].city_name,
			state4:json.events.event[3].region_abbr,
			zip4:json.events.event[3].postal_code,
			start4:json.events.event[3].start_time,
			event5:json.events.event[4].title,
			venueNm5:json.events.event[4].venue_name,
			venueAd5:json.events.event[4].venue_address,
			city5:json.events.event[4].city_name,
			state5:json.events.event[4].region_abbr,
			zip5:json.events.event[4].postal_code,
			start5:json.events.event[4].start_time,
			event6:json.events.event[5].title,
			venueNm6:json.events.event[5].venue_name,
			venueAd6:json.events.event[5].venue_address,
			city6:json.events.event[5].city_name,
			state6:json.events.event[5].region_abbr,
			zip6:json.events.event[5].postal_code,
			start6:json.events.event[5].start_time,
			event7:json.events.event[6].title,
			venueNm7:json.events.event[6].venue_name,
			venueAd7:json.events.event[6].venue_address,
			city7:json.events.event[6].city_name,
			state7:json.events.event[6].region_abbr,
			zip7:json.events.event[6].postal_code,
			start7:json.events.event[6].start_time,
			event8:json.events.event[7].title,
			venueNm8:json.events.event[7].venue_name,
			venueAd8:json.events.event[7].venue_address,
			city8:json.events.event[7].city_name,
			state8:json.events.event[7].region_abbr,
			zip8:json.events.event[7].postal_code,
			start8:json.events.event[7].start_time,
			event9:json.events.event[8].title,
			venueNm9:json.events.event[8].venue_name,
			venueAd9:json.events.event[8].venue_address,
			city9:json.events.event[8].city_name,
			state9:json.events.event[8].region_abbr,
			zip9:json.events.event[8].postal_code,
			start9:json.events.event[8].start_time,
			event10:json.events.event[9].title,
			venueNm10:json.events.event[9].venue_name,
			venueAd10:json.events.event[9].venue_address,
			city10:json.events.event[9].city_name,
			state10:json.events.event[9].region_abbr,
			zip10:json.events.event[9].postal_code,
			start10:json.events.event[9].start_time,
		};
		 
		 
		 var db = Ti.Database.open("eventDB");
			db.execute('CREATE TABLE IF NOT EXISTS eventTbl (id INTEGER PRIMARY KEY, event TEXT)');
			db.execute('DELETE FROM eventTbl');
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.event1);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueNm1);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueAd1);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.city1);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.state1);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.zip1);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.start1);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.event2);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueNm2);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueAd2);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.city2);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.state2);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.zip2);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.start2);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.event3);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueNm3);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueAd3);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.city3);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.state3);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.zip3);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.start3);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.event4);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueNm4);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueAd4);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.city4);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.state4);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.zip4);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.start4);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.event5);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueNm5);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueAd5);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.city5);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.state5);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.zip5);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.start5);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.event6);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueNm6);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueAd6);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.city6);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.state6);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.zip6);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.start6);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.event7);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueNm7);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueAd7);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.city7);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.state7);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.zip7);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.start7);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.event8);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueNm8);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueAd8);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.city8);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.state8);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.zip8);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.start8);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.event9);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueNm9);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueAd9);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.city9);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.state9);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.zip9);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.start9);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.event10);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueNm10);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.venueAd10);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.city10);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.state10);
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.zip10);	
			db.execute('INSERT INTO eventTbl (event) VALUES (?)', event.start10);
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