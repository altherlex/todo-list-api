var should = require('should');
var request = require('supertest');
var server = require('../../../app');

process.env.A127_ENV = 'test';

describe('Funcional Test', function() {
  describe('controllers', function() {
    describe('GET /tasks', function() {
      it('should return an array', function(done) {
        request(server)
          .get('/tasks')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.be.an.instanceOf(Array);
            done();
          });
      });
      it('should return a array with objects for fullcalendar.', function(done) {
        request(server)
          .get('/tasks')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body[0].should.have.properties('title', 'start');
            done();
          });
      });
    });
  });
});
