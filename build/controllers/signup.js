"use strict";

/* eslint-disable linebreak-style */
var _require = require('../helper/userHelper'),
    getSingleUser = _require.getSingleUser,
    getUsersCount = _require.getUsersCount,
    addUser = _require.addUser;

var _require2 = require('../models/users1'),
    Users = _require2.Users;

var replacerJson = require('../helper/indexH.js'); // Parse incoming requests data


function signup(req, res) {
  var errorMessage = '';
  if (!req.body.email) errorMessage = 'Email is not defined';else if (!req.body.fname) errorMessage = 'THe first name is not defined';else if (!req.body.lname) errorMessage = 'The last name is not defined';else if (!req.body.address) errorMessage = 'the address is not defined';else if (!req.body.country) errorMessage = 'The country does not exist';

  if (errorMessage) {
    res.status(400).send({
      status: 400,
      message: errorMessage
    });
  } else {
    var user = getSingleUser(req.body.email);

    if (!user[0]) {
      var newUser = new Users(getUsersCount, req.body.email, req.body.fname, req.body.lname, req.body.password, req.body.address, req.body.country, 'unverified', false);
      addUser(newUser);
      res.status(200).send({
        status: 200,
        data: JSON.stringify(getSingleUser(newUser.email)[0], replacerJson)
      });
    } else {
      res.status(403).send({
        status: 403,
        message: 'This mail already exists'
      });
    }
  }

  return res;
}

module.exports = signup;
//# sourceMappingURL=signup.js.map