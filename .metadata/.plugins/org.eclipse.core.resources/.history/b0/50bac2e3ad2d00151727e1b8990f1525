var readDb = function(){
	var tblData = [];
	var a = 0;
	var db = Ti.Database.open("weatherDB");
	db.execute('CREATE TABLE IF NOT EXISTS weatherTbl (id INTEGER PRIMARY KEY, netWea TEXT)');
	var rows = db.execute('SELECT id, netWea FROM weatherTbl');
	while (rows.isValidRow()){
		tblData.push({
			id: rows.fieldByName('id'),
			netWea: rows.fieldByName('netWea')
		});
		console.log(tblData[a]);
		a++;
		rows.next();	
	};
	rows.close();
	db.close();
	ui.buildUiAct(tblData);
};

exports.readDb = readDb;	