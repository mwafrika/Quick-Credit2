"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = void 0;

var _userHelper = require("../helper/userHelper");

var _users = require("../models/users1");

var _indexH = require("../helper/indexH");

/* eslint-disable linebreak-style */

/* eslint-disable import/prefer-default-export */

/* eslint-disable no-trailing-spaces */

/* eslint-disable linebreak-style */
// Parse incoming requests data
var signup = function signup(req, res) {
  var errorMessage = ''; // i must use validator to validate inputs 

  if (!req.body.email) errorMessage = 'Email is not defined';else if (!req.body.fname) errorMessage = 'THe first name is not defined';else if (!req.body.lname) errorMessage = 'The last name is not defined';else if (!req.body.address) errorMessage = 'the address is not defined';else if (!req.body.country) errorMessage = 'The country does not exist';else if (!req.body.password) errorMessage = 'the password is required';

  if (errorMessage) {
    res.status(400).send({
      status: 400,
      message: errorMessage
    });
  } else {
    var user = (0, _userHelper.getSingleUser)(req.body.email);

    if (!user[0]) {
      var newUser = new _users.Users(_userHelper.getUsersCount, req.body.fname, req.body.lname, req.body.email, req.body.password, 'unverified', false, req.body.address);
      (0, _userHelper.addUser)(newUser);
      res.status(200).send({
        status: 200,
        data: newUser,
        replacerJson: _indexH.replacerJson
      });
    } else {
      res.status(403).send({
        status: 403,
        message: 'This mail already exists'
      });
    }
  }

  return res;
};

exports.signup = signup;
//# sourceMappingURL=signup.js.map