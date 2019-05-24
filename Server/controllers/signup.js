import { getSingleUser, getUsersCount, addUser } from '../helper/userHelper';
import { Users } from '../models/users1';
import { replacerJson } from '../helper/indexH';
import { pool } from '../config/index';
import { insertTab } from '../DB/queries';
import jwt from 'jsonwebtoken';


export const signup = (req, res) => {
  let errorMessage = '';
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

    pool.query(insertTab([req.body.email, req.body.fname, req.body.lname, req.body.password, req.body.address, req.body.status, req.body.isAdmin]), (err, resl) => {
      if (err) {
        console.log(err);
      } else if (resl.rowCount > 0) {
        const {
 id, firstname, lastname, email 
} = resl.rows[0];

        const token = jwt.sign(
          {
            userID: id,
            Email: email,
          },
          'josmwafrika789',
          {
            expiresIn: '24h',
          },
        );
        res.status(200).send({ data: {
 token, id, firstname, lastname, email 
} });
      }
    });
  }

  return res;
};
