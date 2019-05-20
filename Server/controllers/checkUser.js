/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */

import { updateUser, getSingleUser } from '../helper/userHelper';
// Parse incoming requests data

export const verify = (req, res) => {
  if (req.params.userEmail) {
    const email = req.params.userEmail;
    if (email) {
      const user = getSingleUser(email)[0];
      if (user) {
        user.setStatus('verified');
        const newUser = updateUser(user);
        // eslint-disable-next-line no-console
        console.log(user);
        res.status(200).send({
          status: 200,
          data: newUser,
        });
      } else {
        res.status(403).send({
          status: 403,
          message: 'This email does not exist',
        });
      }
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
