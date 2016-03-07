'use strict';

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

    getNextSequence('urlid', db, insertUrl);

    function insertUrl(id) {
      var originalUrl = req.params.url;
      var shortUrl = process.env.APP_URL + id;
      var newUrl = {
        _id: id,
        originalUrl: originalUrl,
        shortUrl: shortUrl
      };

      urls.insertOne(newUrl, function(err, result) {
        if (err) throw err;
        var output = {
          "original_url": originalUrl,
          "short_url": shortUrl
        };

        res.json(output);
      });
    }
  };
}

module.exports = UrlHandler;
