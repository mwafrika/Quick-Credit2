"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-unused-vars */

/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
var chai = require('chai');

var chaiHttp = require('chai-http');

var app = require('../config/index');

var should = chai.should();
chai.use(chaiHttp);
describe('verify user', function () {
  it('it should not verify user if mail does not exist', function (done) {
    chai.request(app.app).patch('/v1/users/mnnjn@gmail.com/verify').send('').end(function (err, res) {
      res.should.have.status(403);
      console.log(res.body.message);
      done();
    });
  });
  it('should return a 200 and new userdata when email exists', function (done) {
    chai.request(app.app).patch('/v1/users/mwafrikajosue@gmail.com/verify').send('').end(function (err, res) {
      res.should.have.status(200);
      console.log(res.body);
      done();
      app.closeServer();
    });
  });
});
module.exports.app = app.app;
//# sourceMappingURL=userTest.js.map