/* eslint-disable linebreak-style */
const loanHelper = require('../helper/userHelper');
const replacerJson = require('../helper/indexH.js');

function login(req, res) {
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
    const user = loanHelper.getSingleUser(req.body.email);
    if (user[0]) {
      console.log(req.body.email);
      if (user[0].validatePassword(req.body.password)) {
        res.status(200).send({
          status: 200,
          data: JSON.stringify(user[0], replacerJson),
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
}
module.exports = login;
