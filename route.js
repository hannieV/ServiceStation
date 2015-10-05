var connection = require('./db').connection;

var index = function(req, res) {
    res.render('index', {title: 'Home'});
};

connection.connect();

var clients = function(req, res) {
    connection.query('SELECT * FROM clients', function(err, rows){
        res.render('clients', {clients : rows, title: 'Clients'});
    });
};

var clientProfile = function(req, res) {
    connection.query("SELECT * FROM cars WHERE client_id='" + req.param('id') + "'; SELECT * FROM clients WHERE id='"+ req.param('id') + "'", function(err, results) {
        if (err) throw err;
        res.render('client_profile', {cars: results[0], title: 'Profile', client: results[1]});
    });
};

var clientAdd = function(req, res) {
    res.render('add_client', {title: 'Add New Client'});
};

var clientAddPost = function(req, res) {
    connection.query("INSERT INTO clients (name, surname, birthday, address, phone, email) VALUES (?, ?, ?, ?, ?, ?)" ,[req.body.name, req.body.surname,
      	req.body.birthday, req.body.address, req.body.phone, req.body.email], function(err, info){
          res.redirect("client_profile?id=" + info.insertId);
        });
    };

var clientEdit = function(req, res) {
    connection.query("SELECT * FROM clients WHERE id='" + req.param('id') + "'", function(err, results) {
  if (err) throw err;
  res.render('client_edit', {client: results, title: 'Edit Client'});
});
};

var clientEditPost = function(req, res) {
    connection.query("UPDATE clients SET name = ?, surname = ?, birthday = ?, address = ?, phone = ?, email = ? WHERE id = ?", 
    	[req.body.name, req.body.surname,
    	req.body.birthday, req.body.address, req.body.phone, req.body.email, req.body.id] , function(err, info){
    		if (err) console.log(err);
  res.redirect('client_profile?id=' + req.body.id);

});
};



var clientDelete = function(req, res) {
    connection.query("DELETE FROM clients WHERE id = ?", 
    	[req.param('id')] , function(err, info){
    		if (err) console.log(err);

  res.redirect('clients');

});
};

var carProfile = function(req, res) {
    connection.query("SELECT * FROM orders WHERE car_id='" + req.param('id') + "'; SELECT * FROM cars WHERE id='"+ req.param('id') + "'", function(err, results) {
  if (err) throw err;
  res.render('car_profile', {orders: results[0], title: 'Profile', car: results[1]});
});
};

var carAdd = function(req, res) {
    res.render('car_add', {title: 'Add New Car', client_id: req.param('id')});
};

var carAddPost = function(req, res) {
    connection.query("INSERT INTO cars (make, model, year, VIN, client_id) VALUES (?, ?, ?, ?, ?)" ,[req.body.make, req.body.model,
    	req.body.year, req.body.VIN, req.body.client_id], function(err, info){
    		if (err) console.log(err);
    		console.log(req.body.VIN);
  res.redirect("car_profile?id=" + info.insertId);

});
};

var carEdit = function(req, res) {
    connection.query("SELECT * FROM cars WHERE id='" + req.param('id') + "'", function(err, results) {
  if (err) throw err;
  res.render('car_edit', {car: results, title: 'Edit Car'});
});
};

var carEditPost = function(req, res) {
    connection.query("UPDATE cars SET make = ?, model = ?, year = ?, VIN = ? WHERE id = ?", 
    	[req.body.make, req.body.model, req.body.year, req.body.VIN, req.body.id] , function(err, info){
    		if (err) console.log(err);
  res.redirect("car_profile?id=" + req.body.id);

});
};

var carDelete = function(req, res) {
    connection.query("DELETE FROM cars WHERE id = ?", 
    	[req.param('id')] , function(err, info){
    		if (err) console.log(err);

  res.redirect("client_profile?id=" + req.param('client_id'));

});
};

var orderAdd = function(req, res) {
    res.render('order_add', {title: 'Add New Order', car_id: req.param('id')});
};

var orderAddPost = function(req, res) {
	var date = new Date();
	date.setHours(date.getHours()+3);

    connection.query("INSERT INTO orders (date, cost, status, car_id) VALUES (?, ?, ?, ?)" ,[date.toISOString().slice(0, 19).replace('T', ' '), req.body.cost,
    	req.body.status, req.body.car_id], function(err, info){
    		if (err) console.log(err);
  res.redirect("car_profile?id=" + req.body.car_id);

});
};

var orderEdit = function(req, res) {
    connection.query("SELECT * FROM orders WHERE id='" + req.param('id') + "'", function(err, results) {
  if (err) throw err;
  res.render('order_edit', {order: results, title: 'Edit Order'});
});
};

var orderEditPost = function(req, res) {
    connection.query("UPDATE orders SET cost = ?, status = ? WHERE id = ?", 
    	[req.body.cost, req.body.status, req.body.id] , function(err, info){
    		if (err) console.log(err);

  res.redirect("car_profile?id=" + req.body.car_id);

});
};

var orderDelete = function(req, res) {
    connection.query("DELETE FROM orders WHERE id = ?", 
    	[req.param('id')] , function(err, info){
    		if (err) console.log(err);

  res.redirect("car_profile?id=" + req.param('car_id'));

});
};



module.exports.index = index;


module.exports.clients = clients;
module.exports.clientAdd = clientAdd;
module.exports.clientEdit = clientEdit;
module.exports.clientEditPost = clientEditPost;
module.exports.clientAddPost = clientAddPost;
module.exports.clientProfile = clientProfile;
module.exports.clientDelete = clientDelete;

module.exports.carAdd = carAdd;
module.exports.carAddPost = carAddPost;
module.exports.carProfile = carProfile;
module.exports.carEdit = carEdit;
module.exports.carEditPost = carEditPost;
module.exports.carDelete = carDelete;

module.exports.orderAdd = orderAdd;
module.exports.orderAddPost = orderAddPost;
module.exports.orderEdit = orderEdit;
module.exports.orderEditPost = orderEditPost;
module.exports.orderDelete = orderDelete;
