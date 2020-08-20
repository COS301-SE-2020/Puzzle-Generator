'use strict';

var app = require('../app');
var   chai = require('chai');
var  request = require('supertest');

var expect = chai.expect;

describe('Todos list API Integration Tests', function() {
  describe('#GET / tasks', function() {
    it('should get all tasks', function(done) {
      request(app) .get('/puzzles/getAllPuzzles')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.be.empty;
          done();
        });
    });
  });
});
