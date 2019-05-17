/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const app = require('../config/index');

const should = chai.should();
chai.use(chaiHttp);

describe('Apply for only one loan', () => {
  it('it should return the loan with id=0', (done) => {
    chai.request(app.app)
      .get('/v1/loans/0')
      .send('')
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
      });
  });
  it('it should return a 400 status since the loan id 1500 doesn\'t exist', (done) => {
    chai.request(app.app)
      .get('/v1/loans/1500')
      .send('')
      .end((err, res) => {
        res.should.have.status(400);

        done();
      });
  });
});
describe('Get current loans spec', () => {
  it('it should return the currents loans', (done) => {
    chai.request(app.app)
      .get('/v1/loans/?status=approved&repaid=false')
      .send('')
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
      });
  });
  it('it should return the current loans of mwafrikajosue@gmail.com', (done) => {
    chai.request(app.app)
      .get('/v1/loans/user/mwafrikajosue@gmail.com/?status=approved&repaid=false')
      .send('')
      .end((err, res) => {
        res.should.have.status(200);
        expect(1).to.be.equal(JSON.parse(res.body.data).length);
        console.log(res.body);
        done();
      });
  });
});
describe('Get all repaid loans specs', () => {
  it('it should return all the repaid loans', (done) => {
    chai.request(app.app)
      .get('/v1/loans/?status=approved&repaid=true')
      .send('')
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
      });
  });
  it('it should return all the repaid loans for a specific user', (done) => {
    chai.request(app.app)
      .get('/v1/loans/user/mwafrikajosue@gmail.com/?status=approved&repaid=true')
      .send('')
      .end((err, res) => {
        res.should.have.status(200);
        expect(1).to.be.equal(JSON.parse(res.body.data).length);
        console.log(res.body);
        done();
      });
  });
});
describe('Get all  loans specs', () => {
  it('it should return all loans', (done) => {
    chai.request(app.app)
      .get('/v1/loans/')
      .send('')
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
      });
  });
  it('it should return all loans for a specific user', (done) => {
    chai.request(app.app)
      .get('/v1/loans/user/mwafrikajosue@gmail.com/')
      .send('')
      .end((err, res) => {
        res.should.have.status(200);
        expect(7).to.be.equal(JSON.parse(res.body.data).length);
        console.log(res.body);
        done();
      });
  });
});
const newLoanCorrectData = {
  userMail: 'josue@gmail.com',
  tenor: 12,
  amount: 2000,
};
const duplicateLoanRequestData = {
  userMail: 'mwafrikajosue@gmail.com',
  tenor: 12,
  amount: 2000,
};
const FakeUserLoanRequestData = {
  userMail: 'mwafrikajosue@gmail.com',
  tenor: 12,
  amount: 2000,
};
describe('Post a new loan', () => {
  it('it should a 400 status because of Undefinned values', (done) => {
    chai.request(app.app)
      .post('/v1/loans/')
      .send('')
      .end((err, res) => {
        res.should.have.status(400);
        console.log(res.body);
        done();
      });
  });
  it('it should return the new loan data', (done) => {
    chai.request(app.app)
      .post('/v1/loans/')
      .send(newLoanCorrectData)
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
      });
  });
  it('it should return 400 status since the user has a current loan', (done) => {
    chai.request(app.app)
      .post('/v1/loans/')
      .send(duplicateLoanRequestData)
      .end((err, res) => {
        res.should.have.status(400);
        console.log(res.body);
        done();
      });
  });
  it('it should return 403 status since the user doesn\'t exist', (done) => {
    chai.request(app.app)
      .post('/v1/loans/')
      .send(FakeUserLoanRequestData)
      .end((err, res) => {
        res.should.have.status(403);
        console.log(res.body);
        done();
      });
  });
});
describe('approve or reject loan', () => {
  it('it should a 400 status because for not found loan id', (done) => {
    chai.request(app.app)
      .patch('/v1/loans/200')
      .send('')
      .end((err, res) => {
        res.should.have.status(400);
        console.log(res.body);
        done();
      });
  });
  it('it should a 401 status when loan already approved', (done) => {
    chai.request(app.app)
      .patch('/v1/loans/0')
      .send('')
      .end((err, res) => {
        res.should.have.status(401);
        console.log(res.body);
        done();
      });
  });
  it('it should a 200 status and loan data when everything is okay', (done) => {
    chai.request(app.app)
      .patch('/v1/loans/7')
      .send('')
      .end((err, res) => {
        res.should.have.status(400);
        console.log(res.body);
        done();
      });
  });
});
