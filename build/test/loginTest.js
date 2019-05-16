"use strict";

/* eslint-disable no-console */

/* eslint-disable no-undef */

/* eslint-disable camelcase */

/* eslint-disable no-unused-vars */

/* eslint-disable linebreak-style */
var chai = require('chai');

var chaiHttp = require('chai-http');

var app = require('../config/index');

var should = chai.should();
chai.use(chaiHttp);
var login_details = {
  email: 'josue@gmail.com',
  password: 'jos123'
};
var loginDetailsTrue = {
  email: 'mwafrikajosue@gmail.com',
  password: '123'
};
describe('login', function () {
  it('it should not login with undefinned values', function (done) {
    chai.request(app.app).post('/v1/auth/signin').send('').end(function (err, res) {
      res.should.have.status(400);
      console.log(res.body.message);
      done();
    });
  });
  it('should return a 403 status when wrong mail or password provided', function (done) {
    chai.request(app.app).post('/v1/auth/signin').send(login_details).end(function (err, res) {
      res.should.have.status(403);
      console.log(res.body.message);
      done();
    });
  });
  it('should return a 200 status when it is correct', function (done) {
    chai.request(app.app).post('/v1/auth/signin').send(loginDetailsTrue).end(function (err, res) {
      res.should.have.status(200);
      chai.expect(JSON.parse(res.body.data).email).equal('mwafrikajosue@gmail.com');
      console.log(JSON.parse(res.body.data));
      done();
    });
  });
});
module.exports.app = app.app;
//# sourceMappingURL=loginTest.js.map