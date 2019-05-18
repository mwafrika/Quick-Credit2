/* eslint-disable linebreak-style */

/* eslint-disable no-console */
/* eslint-disable linebreak-style */

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../config/index');

const should = chai.should();


chai.use(chaiHttp);


const loginDetails = {
  email: 'mwafrikajosue@gmail.com',
  password: '12345678',
  fname: 'josue',
  lname: 'josh',
  country: 'drc ',
  address: 'goma',
  city: 'kampala',
};
const loginDetailsTrue = {
  email: 'mwafrikajosu@gmail.com',
  password: '123',
  fname: 'josue',
  lname: 'josue',
  country: 'drc ',
  address: 'goma',
  city: 'kampala',
};
describe('Signup', () => {
  it('it should create an account with with valid credential', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signup')
      .send('')
      .end((err, res) => {
        res.should.have.status(400);
        console.log(res.body.message);
        done();
      });
  });
  it('it should not create an account if the email has been taken', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signup')
      .send(loginDetails)
      .end((err, res) => {
        res.should.have.status(403);
        console.log(res.body.message);
        done();
      });
  });
  it('should return a 200 status and user data if information provided is correct', (done) => {
   
 chai.request(app.app)
      .post('/v1/auth/signup')
      .send(loginDetailsTrue)
     
 .end((err, res) => {
        res.should.have.status(200);
       
 chai.expect(JSON.parse(res.body.data).emails).equal('mwafrikajosu@gmail.com');
    
    console.log(JSON.parse(res.body.data));
        done();
      });
  });
});
