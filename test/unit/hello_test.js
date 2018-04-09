var chai = require('chai');
const assert = require('assert');
var should = chai.should();
//var sinon = require('sinon');
var request = require('supertest');
var app = require('../../src/index.js');

describe('GET /',() => {
  after( () => app.stopServer())
  it('return Hello World', (done) =>{
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res){
        assert(!err);
        should.equal(res.body.msg, 'Hello Planet!');
        done()
      });

  });

});