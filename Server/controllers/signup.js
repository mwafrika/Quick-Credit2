/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */

import { getSingleUser, getUsersCount, addUser } from '../helper/userHelper';
import { Users } from '../models/users1';
import { replacerJson } from '../helper/indexH';

// Parse incoming requests data
export const signup = (req, res) => {
  let errorMessage = ''; // i must use validator to validate inputs 
  if (!req.body.email) errorMessage = 'Email is not defined';
  else if (!req.body.fname)errorMessage = 'THe first name is not defined';
  else if (!req.body.lname)errorMessage = 'The last name is not defined';
  else if (!req.body.address)errorMessage = 'the address is not defined';
  else if (!req.body.country)errorMessage = 'The country does not exist';
  else if (!req.body.password)errorMessage = 'the password is required';
  if (errorMessage) {
    res.status(400).send({
      status: 400,
      message: errorMessage,
    });
  } else {
    const user = getSingleUser(req.body.email);
    if (!user[0]) {
      const newUser = new Users(getUsersCount, req.body.fname, req.body.lname, req.body.email,
        req.body.password, 'unverified', false, req.body.address);
      addUser(newUser);
      res.status(200).send({
        status: 200,
        data: newUser,
        replacerJson,
      });
    } else {
      res.status(403).send({
        status: 403,
        message: 'This mail already exists',
      });
    }
  }
  return res;
};
