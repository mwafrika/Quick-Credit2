"use strict";

/* eslint-disable no-console */

/* eslint-disable linebreak-style */
var chai = require('chai');

var chaiHttp = require('chai-http');

var app = require('../config/index');

var should = chai.should();
chai.use(chaiHttp);
var loginDetails = {
  email: 'josue@gmail.com',
  password: '12345678',
  fname: 'josue',
  lname: 'josh',
  country: 'drc ',
  address: 'goma',
  city: 'kampala'
};
var loginDetailsTrue = {
  email: 'mwafrikajosue@gmail.com',
  password: '123',
  fname: 'josue',
  lname: 'josue',
  country: 'drc ',
  address: 'goma',
  city: 'kampala'
};
describe('Signup', function () {
  it('it should create an account with with valid credential', function (done) {
    chai.request(app.app).post('/v1/auth/signup').send('').end(function (err, res) {
      res.should.have.status(400);
      console.log(res.body.message);
      done();
    });
  });
  it('it should not create an account if the email has been taken', function (done) {
    chai.request(app.app).post('/v1/auth/signup').send(loginDetails).end(function (err, res) {
      res.should.have.status(403);
      console.log(res.body.message);
      done();
    });
  });
  it('should return a 200 status and user data if information provided is correct', function (done) {
    chai.request(app.app).post('/v1/auth/signup').send(loginDetailsTrue).end(function (err, res) {
      res.should.have.status(200);
      chai.expect(JSON.parse(res.body.data).email).equal('mwafrikajosue@gmail.com');
      console.log(JSON.parse(res.body.data));
      done();
    });
  });
});
//# sourceMappingURL=signUpTest.js.map