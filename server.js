var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/public'));  

app.use(bodyParser());

app.use('/node_modules', express.static(__dirname + '/node_modules'));

var route = require('./route');

app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser());


app.get('/', route.index);

app.get('/clients', route.clients);
app.get('/client_add', route.clientAdd);
app.post('/client_add', route.clientAddPost);
app.get('/client_edit', route.clientEdit);
app.post('/client_edit', route.clientEditPost);
app.get('/client_profile', route.clientProfile);
app.get('/client_delete', route.clientDelete);

app.get('/car_add', route.carAdd);
app.post('/car_add', route.carAddPost);
app.get('/car_profile', route.carProfile);
app.get('/car_edit', route.carEdit);
app.post('/car_edit', route.carEditPost);
app.get('/car_delete', route.carDelete);

app.get('/order_add', route.orderAdd);
app.post('/order_add', route.orderAddPost);
app.get('/order_edit', route.orderEdit);
app.post('/order_edit', route.orderEditPost);
app.get('/order_delete', route.orderDelete);

var server = app.listen(app.get('port'), function(err) {
   if(err) throw err;

   var message = 'Server is running @ http://localhost:' + server.address().port;
   console.log(message);
});

