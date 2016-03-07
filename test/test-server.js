var chai = require('chai');
var chaiHttp = require('chai-http');
// var server = require('../server.js');
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
