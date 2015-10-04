var express = require('express');
var app = express();
var mysql = require('mysql');
var port = process.env.PORT || 8080;

var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '1',  
  database : 'service_center'  
});  

connection.connect();  

require('./app/routes.js')(app); 

app.listen(port);
console.log('Check some stuff on port ' + port);