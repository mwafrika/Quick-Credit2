"use strict";

/* eslint-disable no-unused-vars */

/* eslint-disable linebreak-style */
var assert = require('assert');

var chai = require('chai');

var chaiHttp = require('chai-http');

var _require = require('chai'),
    expect = _require.expect;

var app = require('../config/index');

var should = chai.should();
chai.use(chaiHttp);
describe('Apply for only one loan', function () {
  it('it should return the loan with id=0', function (done) {
    chai.request(app.app).get('/v1/loans/0').send('').end(function (err, res) {
      res.should.have.status(200);
      console.log(res.body);
      done();
    });
  });
  it('it should return a 400 status since the loan id 1500 doesn\'t exist', function (done) {
    chai.request(app.app).get('/v1/loans/1500').send('').end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });
});
describe('Get current loans spec', function () {
  it('it should return the currents loans', function (done) {
    chai.request(app.app).get('/v1/loans/?status=approved&repaid=false').send('').end(function (err, res) {
      res.should.have.status(200);
      console.log(res.body);
      done();
    });
  });
  it('it should return the current loans of mwafrikajosue@gmail.com', function (done) {
    chai.request(app.app).get('/v1/loans/user/mwafrikajosue@gmail.com/?status=approved&repaid=false').send('').end(function (err, res) {
      res.should.have.status(200);
      expect(1).to.be.equal(JSON.parse(res.body.data).length);
      console.log(res.body);
      done();
    });
  });
});
describe('Get all repaid loans specs', function () {
  it('it should return all the repaid loans', function (done) {
    chai.request(app.app).get('/v1/loans/?status=approved&repaid=true').send('').end(function (err, res) {
      res.should.have.status(200);
      console.log(res.body);
      done();
    });
  });
  it('it should return all the repaid loans for a specific user', function (done) {
    chai.request(app.app).get('/v1/loans/user/mwafrikajosue@gmail.com/?status=approved&repaid=true').send('').end(function (err, res) {
      res.should.have.status(200);
      expect(1).to.be.equal(JSON.parse(res.body.data).length);
      console.log(res.body);
      done();
    });
  });
});
describe('Get all  loans specs', function () {
  it('it should return all loans', function (done) {
    chai.request(app.app).get('/v1/loans/').send('').end(function (err, res) {
      res.should.have.status(200);
      console.log(res.body);
      done();
    });
  });
  it('it should return all loans for a specific user', function (done) {
    chai.request(app.app).get('/v1/loans/user/mwafrikajosue@gmail.com/').send('').end(function (err, res) {
      res.should.have.status(200);
      expect(7).to.be.equal(JSON.parse(res.body.data).length);
      console.log(res.body);
      done();
    });
  });
});
var newLoanCorrectData = {
  userMail: 'josue@gmail.com',
  tenor: 12,
  amount: 2000
};
var duplicateLoanRequestData = {
  userMail: 'mwafrikajosue@gmail.com',
  tenor: 12,
  amount: 2000
};
var FakeUserLoanRequestData = {
  userMail: 'mwafrikajosue@gmail.com',
  tenor: 12,
  amount: 2000
};
describe('Post a new loan', function () {
  it('it should a 400 status because of Undefinned values', function (done) {
    chai.request(app.app).post('/v1/loans/').send('').end(function (err, res) {
      res.should.have.status(400);
      console.log(res.body);
      done();
    });
  });
  it('it should return the new loan data', function (done) {
    chai.request(app.app).post('/v1/loans/').send(newLoanCorrectData).end(function (err, res) {
      res.should.have.status(200);
      console.log(res.body);
      done();
    });
  });
  it('it should return 400 status since the user has a current loan', function (done) {
    chai.request(app.app).post('/v1/loans/').send(duplicateLoanRequestData).end(function (err, res) {
      res.should.have.status(400);
      console.log(res.body);
      done();
    });
  });
  it('it should return 403 status since the user doesn\'t exist', function (done) {
    chai.request(app.app).post('/v1/loans/').send(FakeUserLoanRequestData).end(function (err, res) {
      res.should.have.status(403);
      console.log(res.body);
      done();
    });
  });
});
describe('approve or reject loan', function () {
  it('it should a 400 status because for not found loan id', function (done) {
    chai.request(app.app).patch('/v1/loans/200').send('').end(function (err, res) {
      res.should.have.status(400);
      console.log(res.body);
      done();
    });
  });
  it('it should a 401 status when loan already approved', function (done) {
    chai.request(app.app).patch('/v1/loans/0').send('').end(function (err, res) {
      res.should.have.status(401);
      console.log(res.body);
      done();
    });
  });
  it('it should a 200 status and loan data when everything is okay', function (done) {
    chai.request(app.app).patch('/v1/loans/7').send('').end(function (err, res) {
      res.should.have.status(400);
      console.log(res.body);
      done();
    });
  });
});
//# sourceMappingURL=loanTest.js.map