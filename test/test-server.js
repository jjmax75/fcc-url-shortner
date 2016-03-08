var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);

describe('Simple Tests', function() {
  it('A simple string test', function() {
    'foo'.should.be.a('string');
  });
  it('A simple number test', function() {
    Number('1').should.be.a('number');
  });
});

describe('App specific tests', function() {
  describe('Page responses, type & content', function() {
    it('Should display the homepage, /, GET', function(done) {
      chai.request(server)
        .get('/')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.html;
          res.should.be.a('object');
          done();
        });
    });
    it('Should display the urls page, /api/urls, GET', function(done) {
      chai.request(server)
        .get('/api/urls')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.should.be.a('object');
          done();
        });
    });
    it('Should display the new page, /api/new/:url, GET', function(done) {
      chai.request(server)
        .get('/api/new/boxitoff.com')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.should.be.a('object');
          done();
        });
    });
  });

  describe('Adding a URL to DB, /api/new/:url', function() {
    it('Should extract the url from the parameter', function(done) {
      chai.request(server)
        .get('/api/new/boxitoff.com')
        .end(function(err, res) {
          
          done();
        });
    });
    it('Should determine if the url is valid', function(done) {
      chai.request(server)
        .get('/api/new/notAUrl')
        .end(function(err, res) {

          done();
        });
    });
  });
});
