/* eslint-disable linebreak-style */
const userData = require('../model/user').default;


function getUsers() {
  return userData.users;
}

const getUsersCount = userData.users.length;

const addUser = (user) => {
  userData.users.push(user);
};
function getSingleUser(email) {
  return userData.users.filter(user => user.email === email);
}
function updateUser(user) {
  userData.users[user.getUserID()] = user;
  return userData.users[user.getUserID()];
}
module.exports = {
  getUsers,
  getUsersCount,
  addUser,
  getSingleUser,
  updateUser,
};
