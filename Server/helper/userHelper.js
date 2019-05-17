/* eslint-disable linebreak-style */
// const userData = require('../models/users1').default;

import {Users, users} from '../models/users1';


export const getUsers= () =>{
  return users;
}

export const getUsersCount = users.length;

export const addUser = (user) => {
  users.push(user);
};

export const getSingleUser = (email) =>{
   return users.filter(user => users.email === email);
 }
export const updateUser = (user) =>{
  users[Users.getUserID] = user;
  return users[user];
}
