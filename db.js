var mysql = require('mysql');


var connection = mysql.createConnection({
	multipleStatements: true,
  host: 'localhost',
        user: 'root',
        password : '1',
        port : 3306, 
        database:'service_center'
});

module.exports.connection = connection;