/* eslint-disable linebreak-style */
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const app = require('../config/index');

const should = chai.should();
chai.use(chaiHttp);
const fakeRepaymentData = {
  amount: 'jjjjj',
};
const correctRepaymentData = {
  amount: '210',
};
describe('Post a repayment transaction', () => {
  it('it should return a 400 status when amount is  not a number', (done) => {
    chai.request(app.app)
      .post('/v1/loans/0/repayment')
      .send(fakeRepaymentData)
      .end((err, res) => {
        res.should.have.status(400);
        console.log(res.body);
        done();
      });
  });
  it('it should return a 400 status when amount is  undefined', (done) => {
    chai.request(app.app)
      .post('/v1/loans/0/repayment')
      .send('')
      .end((err, res) => {
        res.should.have.status(400);
        console.log(res.body);
        done();
      });
  });
  it('it should return a 400 status when the loan is not found', (done) => {
    chai.request(app.app)
      .post('/v1/loans/650/repayment')
      .send(correctRepaymentData)
      .end((err, res) => {
        res.should.have.status(400);
        console.log(res.body);
        done();
      });
  });
  it('it should return a 200 status when everything is okey', (done) => {
    chai.request(app.app)
      .post('/v1/loans/0/repayment')
      .send(correctRepaymentData)
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
      });
  });
  it('it should return a 401 status loan is already repaid', (done) => {
    chai.request(app.app)
      .post('/v1/loans/1/repayment')
      .send(correctRepaymentData)
      .end((err, res) => {
        res.should.have.status(401);
        console.log(res.body);
        done();
      });
  });
});
describe('Post a repayment transaction', () => {
  it('it should return a 200 and a list containing one repayment', (done) => {
    chai.request(app.app)
      .get('/v1/loans/0/repayment')
      .send('')
      .end((err, res) => {
        res.should.have.status(200);
        expect(2).to.equal(JSON.parse(res.body.data).length);
        console.log(res.body);
        done();
      });
  });
});
