/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../config/index');

const should = chai.should();
chai.use(chaiHttp);

const login_details = {
  email: 'josue@gmail.com',
  password: 'jos123',
};

const loginDetailsTrue = {
  email: 'mwafrikajosue@gmail.com',
  password: '123',
};

describe('login', () => {
  it('it should not login with undefinned values', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signin')
      .send('')
      .end((err, res) => {
        res.should.have.status(400);
        console.log(res.body.message);
        done();
      });
  });
  it('should return a 403 status when wrong mail or password provided', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signin')
      .send(login_details)
      .end((err, res) => {
        res.should.have.status(403);
        console.log(res.body.message);
        done();
      });
  });
  it('should return a 200 status when it is correct', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signin')
      .send(loginDetailsTrue)
      .end((err, res) => {
        res.should.have.status(200);
        chai.expect(JSON.parse(res.body.data).email).equal('mwafrikajosue@gmail.com');
        console.log(JSON.parse(res.body.data));
        done();
      });
  });
});

module.exports.app = app.app;
