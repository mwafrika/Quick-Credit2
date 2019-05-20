/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */

import { getSingleUser } from '../helper/userHelper';
import replacerJson from '../helper/indexH.js';

export const login = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({
      success: 'false',
      message: 'the email is required',
    });
  } else if (!req.body.password) {
    res.status(400).send({
      success: 'false',
      message: 'the password is required',
    });
  } else {
    const user = getSingleUser(req.body.email);
    console.log(user);
    if (user[0]) {
      console.log(req.body.email);
      if (user[0].password === req.body.password) {
        res.status(200).send({
          status: 200,
          data: user[0],
          replacerJson,
        });
      } else {
        res.status(403).send({
          status: 400,
          message: 'wrong email or password',
        });
      }
    } else {
      res.status(403).send({
        status: 400,
        message: 'wrong email or password',
      });
    }
  }
  return res;
};


// module.exports = login;
