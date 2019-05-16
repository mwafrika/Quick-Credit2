"use strict";

/* eslint-disable linebreak-style */
var chai = require('chai');

var chaiHttp = require('chai-http');

var _require = require('chai'),
    expect = _require.expect;

var app = require('../config/index');

var should = chai.should();
chai.use(chaiHttp);
var fakeRepaymentData = {
  amount: 'jjjjj'
};
var correctRepaymentData = {
  amount: '210'
};
describe('Post a repayment transaction', function () {
  it('it should return a 400 status when amount is  not a number', function (done) {
    chai.request(app.app).post('/v1/loans/0/repayment').send(fakeRepaymentData).end(function (err, res) {
      res.should.have.status(400);
      console.log(res.body);
      done();
    });
  });
  it('it should return a 400 status when amount is  undefined', function (done) {
    chai.request(app.app).post('/v1/loans/0/repayment').send('').end(function (err, res) {
      res.should.have.status(400);
      console.log(res.body);
      done();
    });
  });
  it('it should return a 400 status when the loan is not found', function (done) {
    chai.request(app.app).post('/v1/loans/650/repayment').send(correctRepaymentData).end(function (err, res) {
      res.should.have.status(400);
      console.log(res.body);
      done();
    });
  });
  it('it should return a 200 status when everything is okey', function (done) {
    chai.request(app.app).post('/v1/loans/0/repayment').send(correctRepaymentData).end(function (err, res) {
      res.should.have.status(200);
      console.log(res.body);
      done();
    });
  });
  it('it should return a 401 status loan is already repaid', function (done) {
    chai.request(app.app).post('/v1/loans/1/repayment').send(correctRepaymentData).end(function (err, res) {
      res.should.have.status(401);
      console.log(res.body);
      done();
    });
  });
});
describe('Post a repayment transaction', function () {
  it('it should return a 200 and a list containing one repayment', function (done) {
    chai.request(app.app).get('/v1/loans/0/repayment').send('').end(function (err, res) {
      res.should.have.status(200);
      expect(2).to.equal(JSON.parse(res.body.data).length);
      console.log(res.body);
      done();
    });
  });
});
//# sourceMappingURL=repaymentTest.js.map