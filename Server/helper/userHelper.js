/* eslint-disable linebreak-style */
// const userData = require('../models/users1').default;
import {Users, users} from '../models/users1';
// const Users = require('Users');
// const users = require('users');

function getUsers() {
  return users;
  
}

const getUsersCount = users.length;

const addUser = (user) => {
  users.push(user);
};
function getSingleUser(email) {
  return users.filter(user => users.email === email);
}
function updateUser(user) {
  users[Users.getUserID] = user;
  return users[user];
}
module.exports = {
  getUsers,
  getUsersCount,
  addUser,
  getSingleUser,
  updateUser,
};
