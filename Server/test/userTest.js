import express from 'express';

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../config/index');

const should = chai.should();

chai.use(chaiHttp);


describe('verify user', () =>
{
  it('it should not verify user if mail does not exist', (done) =>
  {
    chai.request(app.app)
      .patch('/v1/users/mnnjn@gmail.com/verify')

      .send('')
      .end((err, res) => {
        res.should.have.status(403);

        console.log(res.body.message);
        done();
      });
  });
  it('should return a 200 and new userdata when email exists', (done) => {
    chai.request(app.app)
      .patch('/v1/users/mwafrikajosue@gmail.com/verify')
      .send('')
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
        app.closeServer();
      });
  });
});

module.exports.app = app.app;
