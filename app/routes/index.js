'use strict';

var path = process.cwd();

var UrlHandler = require(path + '/app/controllers/urlHandler.server.js');

module.exports = function (app, db) {

	var urlHandler = new UrlHandler(db);

	app.route('/')
    .get(function(req, res) {
      res.sendFile(path + '/public/index.html');
    });

	app.route('/api/urls')
		.get(urlHandler.getUrls);

	app.route(/\/api\/new\/(.+)/) // regex to grab the parameter after /api/new/
		.get(urlHandler.addUrl);
};
