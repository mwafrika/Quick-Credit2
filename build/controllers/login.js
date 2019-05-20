"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _userHelper = require("../helper/userHelper");

var _indexH = _interopRequireDefault(require("../helper/indexH.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable linebreak-style */

/* eslint-disable import/prefer-default-export */

/* eslint-disable linebreak-style */

/* eslint-disable no-console */

/* eslint-disable import/extensions */

/* eslint-disable linebreak-style */
var login = function login(req, res) {
  if (!req.body.email) {
    res.status(400).send({
      success: 'false',
      message: 'the email is required'
    });
  } else if (!req.body.password) {
    res.status(400).send({
      success: 'false',
      message: 'the password is required'
    });
  } else {
    var user = (0, _userHelper.getSingleUser)(req.body.email);
    console.log(user);

    if (user[0]) {
      console.log(req.body.email);

      if (user[0].password === req.body.password) {
        res.status(200).send({
          status: 200,
          data: user[0],
          replacerJson: _indexH["default"]
        });
      } else {
        res.status(403).send({
          status: 400,
          message: 'wrong email or password'
        });
      }
    } else {
      res.status(403).send({
        status: 400,
        message: 'wrong email or password'
      });
    }
  }

  return res;
}; // module.exports = login;


exports.login = login;
//# sourceMappingURL=login.js.map