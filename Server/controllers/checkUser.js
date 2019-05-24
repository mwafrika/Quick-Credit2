/* eslint-disable linebreak-style */
import { updateUser, getSingleUser } from '../helper/userHelper';
import { pool } from '../config/index';


export const verify = (req, res) => {
  if (req.params.userEmail) {
    const email = req.params.userEmail;
    if (email) {
      const user = 'SELECT * FROM users WHERE email = $1';
      pool.query(user, [email], (err, resl) => {
        if (err) {
          throw err;
        }
        if (resl.rowCount > 0) {
          res.status(200).send({
            status: 200,
            data: resl.rows,
          });
        } else {
          res.status(403).send({
            status: 403,
            message: 'This email does not exist',
          });
        }
      });
    } else {
      res.status(400).send({
        status: 400,
        message: 'bad request',
      });
    }
  } else {
    res.status(400).send({
      status: 400,
      message: 'bad request, please provide valid parameter',
    });
  }
};
