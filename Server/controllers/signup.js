/* eslint-disable linebreak-style */
const { getSingleUser, getUsersCount, addUser } = require('../helper/userHelper');
const { Users } = require('../models/users1');
const replacerJson = require('../helper/indexH.js');

// Parse incoming requests data
function signup(req, res) {
  let errorMessage = '';
  if (!req.body.email) errorMessage = 'Email is not defined';
  else if (!req.body.fname)errorMessage = 'THe first name is not defined';
  else if (!req.body.lname)errorMessage = 'The last name is not defined';
  else if (!req.body.address)errorMessage = 'the address is not defined';
  else if (!req.body.country)errorMessage = 'The country does not exist';
  else if(!req.body.password)errorMessage = 'the password is required';
  if (errorMessage) {
    res.status(400).send({
      status: 400,
      message: errorMessage,
    });
  } else {
    const user = getSingleUser(req.body.email);
    if (!user[0]) {
      const newUser = new Users(getUsersCount, req.body.fname, req.body.lname, req.body.email,
         req.body.password, 'unverified',false, req.body.address );
      addUser(newUser);
      res.status(200).send({
        status: 200,
        data: JSON.stringify(newUser, replacerJson),
      });
    } else {
      res.status(403).send({
        status: 403,
        message: 'This mail already exists',
      });
    }
  }
  return res;
}
module.exports = signup;
