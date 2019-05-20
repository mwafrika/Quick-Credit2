/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
// const userData = require('../models/users1').default;

import { Users, users } from '../models/users1';


export const getUsers = () => users;

export const getUsersCount = users.length;

export const addUser = (user) => {
  user.getUserID = users.length; // change user.id to user.getUserID
  const result = users.push(user);
};

export const getSingleUser = (email) => {
  console.log(users);
  return users.filter(user => user.emails === email);
};
export const updateUser = (user) => {
  users[Users.getUserID] = user;
  return users[user];
};
