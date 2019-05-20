"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verify = void 0;

var _userHelper = require("../helper/userHelper");

/* eslint-disable linebreak-style */

/* eslint-disable import/prefer-default-export */

/* eslint-disable linebreak-style */
// Parse incoming requests data
var verify = function verify(req, res) {
  if (req.params.userEmail) {
    var email = req.params.userEmail;

    if (email) {
      var user = (0, _userHelper.getSingleUser)(email)[0];

      if (user) {
        user.setStatus('verified');
        var newUser = (0, _userHelper.updateUser)(user); // eslint-disable-next-line no-console

        console.log(user);
        res.status(200).send({
          status: 200,
          data: newUser
        });
      } else {
        res.status(403).send({
          status: 403,
          message: 'This email does not exist'
        });
      }
    } else {
      res.status(400).send({
        status: 400,
        message: 'bad request'
      });
    }
  } else {
    res.status(400).send({
      status: 400,
      message: 'bad request, please provide valid parameter'
    });
  }
};

exports.verify = verify;
//# sourceMappingURL=checkUser.js.map