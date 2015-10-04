var express = require('express');
var app = express();
var mysql = require('mysql');
var path = require('path');

app.use('/node_modules', express.static(__dirname + '/node_modules')); 
app.use(express.static(__dirname + '/public'));  

var connectionDB = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '1',  
  database : 'service_center'  
});  

connectionDB.connect();  

app.get('/', function(req, res) {
    res.sendfile('./public/views/index.html');
});


app.listen(8080);
console.log('Check some stuff on port 8080');