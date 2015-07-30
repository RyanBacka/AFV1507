var readDb = function(){
	var tblData = [];
	var a = 0;
	var db = Ti.Database.open("eventDB");
	db.execute('CREATE TABLE IF NOT EXISTS eventTbl (id INTEGER PRIMARY KEY, event TEXT)');
	var rows = db.execute('SELECT id, event FROM eventTbl');
	while (rows.isValidRow()){
		tblData.push({
			id: rows.fieldByName('id'),
			netWea: rows.fieldByName('event')
		});
		console.log(tblData[a]);
		a++;
		rows.next();	
	};
	rows.close();
	db.close();
	ui.buildUi(tblData);
};

exports.readDb = readDb;	