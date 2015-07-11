var getGeo =  function() {
		Ti.Geolocation.getCurrentPosition(function(a){
			console.log(a);
			console.log(JSON.stringify(a.source));
			var loc = {
				lat : a.cords.latitude,
			    lng : a.cords.longitude
			  };
			ui.buildUi(loc);
		});
};

exports.getGeo = getGeo;