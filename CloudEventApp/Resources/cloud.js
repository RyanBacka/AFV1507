var cloud=require("ti.cloud");
cloud.debug = true;

//var userId;

var loginCloud = function(){
	cloud.users.login({
		login: "eventfulDBAdmin",
		password: "12345"
	}, function(e){
		console.log(e);
		if (e.success) {
			var api = require("network");
			api.getData();
			//userId = e.users[0].id
		}else{
			alert("Error: " + e.message);
		}
	});
};


