'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');

var app = express();
require('dotenv').config();
var port = process.env.PORT || 8080;
var path = process.cwd();

mongoose.connect(process.env.MONGO_URI);

app.use('/controllers', express.static(path + '/app/controllers'));
app.use('/public', express.static(path + '/public'));

routes(app);

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
