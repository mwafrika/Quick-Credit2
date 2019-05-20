"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.getSingleUser = exports.addUser = exports.getUsersCount = exports.getUsers = void 0;

var _users = require("../models/users1");

/* eslint-disable linebreak-style */

/* eslint-disable no-unused-vars */

/* eslint-disable no-param-reassign */

/* eslint-disable linebreak-style */
// const userData = require('../models/users1').default;
var getUsers = function getUsers() {
  return _users.users;
};

exports.getUsers = getUsers;
var getUsersCount = _users.users.length;
exports.getUsersCount = getUsersCount;

var addUser = function addUser(user) {
  user.getUserID = _users.users.length; // change user.id to user.getUserID

  var result = _users.users.push(user);
};

exports.addUser = addUser;

var getSingleUser = function getSingleUser(email) {
  console.log(_users.users);
  return _users.users.filter(function (user) {
    return user.emails === email;
  });
};

exports.getSingleUser = getSingleUser;

var updateUser = function updateUser(user) {
  _users.users[_users.Users.getUserID] = user;
  return _users.users[user];
};

exports.updateUser = updateUser;
//# sourceMappingURL=userHelper.js.map