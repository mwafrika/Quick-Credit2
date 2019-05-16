"use strict";

var _users = require("../models/users1");

/* eslint-disable linebreak-style */
// const userData = require('../models/users1').default;
// const Users = require('Users');
// const users = require('users');
function getUsers() {
  return _users.users;
}

var getUsersCount = _users.users.length;

var addUser = function addUser(user) {
  _users.users.push(user);
};

function getSingleUser(email) {
  return _users.users.filter(function (user) {
    return _users.users.email === email;
  });
}

function updateUser(user) {
  _users.users[_users.Users.getUserID] = user;
  return _users.users[user];
}

module.exports = {
  getUsers: getUsers,
  getUsersCount: getUsersCount,
  addUser: addUser,
  getSingleUser: getSingleUser,
  updateUser: updateUser
};
//# sourceMappingURL=userHelper.js.map