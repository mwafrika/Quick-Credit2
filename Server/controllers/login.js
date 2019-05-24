import jwt from 'jsonwebtoken';
import { getSingleUser } from '../helper/userHelper';
import replacerJson from '../helper/indexH.js';
import { signIn } from '../DB/queries';
import { pool } from '../config/index';

const login = (req, res) => {
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
    pool.query(signIn([req.body.email, req.body.password]), (err, resl) => {
      if (err) {
        console.log(err);
      } else if (resl.rowCount > 0) {
        const { id, firstname, lastname, email } = resl.rows[0];

        const token = jwt.sign(
          {
            userID: id,
            Email: email,
          },
          'josmwafrika789',
          {
            expiresIn : '24h',
          }
        );
        res.status(200).send({ data: { token, id, firstname, lastname, email } });
      } else {
        res.status(403).send({
          status: 400,
          message: 'wrong email or password',
        });
      }
    });
  }
};

export default login;
