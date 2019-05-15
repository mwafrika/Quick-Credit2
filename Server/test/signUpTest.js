/* eslint-disable linebreak-style */
import assert from 'assert';
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../config/index';

const should = chai.should();

chai.use(chaihttp);
const login1 = {
  email: 'mwafrika@gmail.com',
  password: '123',
  fname: 'mwafrika',
  lname: 'josue',
  country: 'congo',
  address: 'rubavu',
};
const login2 = {
  email: 'mwafrikajosue@gmail.com',
  password: 'jos123',
  fname: 'mwafrika',
  lname: 'josue',
  country: 'congo',
  address: 'kigali',
};

describe('SignUp', () => {
  it('it should not create an account with undefined values', (done) =>   {
    chai.request(app.app)
      .post('/v1/auth/signup')
      .send('')
      .end((err, res) => { // getting response from the endpoints
        // meaning that an object should have a status of 201
        res.should.have.status(400);
        console.log(res.body.message);
        done();
      });
  });
  it('it should not create an account if the email is already taken', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signup')
      .send(loginDetails)
      .end((err, res) => { // / getting response from the endpoints
        // meaning that an object should have a status of 201
        res.should.have.status(403);
        console.log(res.body.message);
        done();
      });
  });
  it('should return a 200 status and user data when information is correct', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signup')
      .send(loginDetailsTrue); // getting response from the endpoints
    // meaning that an object should have a status of 201
    res.should.have.status(200);
    chai.expect(JSON.parse(res.body.data).email).equal('mwafrikajosue@gmail.com');
    console.log(JSON.parse(res.body.data));
    done();
    // app.closeServer();
  });
});
