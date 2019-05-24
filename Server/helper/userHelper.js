import { Users, users } from '../models/users1';

export const getUsers = () => users;
export const getUsersCount = users.length;
export const addUser = (user) => {
  user.getUserID = users.length;
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
