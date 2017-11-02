mysql = require('mysql');

mysqlSettings = {
	host: 'localhost',
	user: 'root',
	password: 'jason',
	database: 'backend'
};

db = {};
db.cnn = {};
db.cnn.exec = function(query, callback) {
	var connection = mysql.createConnection(mysqlSettings);
	connection.connect();
	connection.query(query, function(err, rows) {
		if(err) console.log("=======================\n");
		callback(rows, err);
		connection.end();
	});
};

var App = {
	PATH_FILE: 'dados/pessoas.js',
	db: db
}

module.exports = App;