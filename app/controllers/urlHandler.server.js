'use strict';

var validator = require('validator');
var path = process.cwd();
var getNextSequence = require(path + '/app/common/getNextSequence.js');

function UrlHandler(db) {
  var urls = db.collection('urls');

  this.getUrls = function(req, res) {
    // TODO - not needed, just testing DB connection

    urls.find().toArray(function(err, result) {
      if (err) throw err;

      res.json(result);
    });
  };

  this.addUrl = function(req, res) {
    var url = req.params[0];

    if (validator.isURL(url, {require_tld: true})) {
      getNextSequence('urlid', db, insertUrl);
    } else {
      var output = {"error": "URL Invalid"};
      res.json(output);
    }

    function insertUrl(id) {
      var shortUrl = process.env.APP_URL + id;
      var newUrl = {
        _id: id,
        originalUrl: url,
        shortUrl: shortUrl
      };

      urls.insertOne(newUrl, function(err, result) {
        if (err) throw err;
        var output = {
          "original_url": url,
          "short_url": shortUrl
        };

        res.json(output);
      });
    }
  };
}

module.exports = UrlHandler;
