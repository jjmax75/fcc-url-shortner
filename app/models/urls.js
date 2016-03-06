'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Url = new Schema({
	id: String,
	originalUrl: String,
	shortUrl: String
});

module.exports = mongoose.model('Url', Url);
