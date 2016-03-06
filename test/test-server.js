var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);

describe('Urls', function() {
  it('should respond with shortened url on /new/:url GET');
  it('should send to original url on /:id GET');
  it('should give an error on /new/<invalid-url> GET');
});
