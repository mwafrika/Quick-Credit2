"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewLoan = exports.getUserLoan = void 0;

var _loansHelper = require("../helper/loansHelper");

var _userHelper = require("../helper/userHelper");

var _Loan = require("../models/Loan1");

/* eslint-disable linebreak-style */
var getUserLoan = function getUserLoan(req, res) {
  if (req.query.status === 'approved' && req.query.repaid === 'false') {
    res.status(200).send({
      status: 200,
      data: (0, _loansHelper.getCurrentLoans)(req.params.email)
    });
  } else if (req.query.status === 'approved' && req.query.repaid === 'true') {
    res.status(200).send({
      status: 200,
      data: (0, _loansHelper.getRepaidLoans)(req.params.email)
    });
  } else {
    res.status(200).send({
      status: 200,
      data: (0, _loansHelper.getAllLoans)(req.params.email)
    });
  }
};

exports.getUserLoan = getUserLoan;

var addNewLoan = function addNewLoan(req, res) {
  var errorMessage = '';
  var status = 400;
  if (!req.body.userMail) errorMessage = 'Bad request, Please provide the user email';else if (!req.body.tenor || Number.isNaN(req.body.tenor)) errorMessage = 'Bad request, Please provide a valide tenor';else if (!req.body.amount || Number.isNaN(req.body.amount)) errorMessage = 'Please provide a valide amount';else {
    var user = (0, _userHelper.getSingleUser)(req.body.userMail);
    var currentLoans = (0, _loansHelper.getCurrentLoans)(req.body.userMail);

    if (!user[0]) {
      errorMessage = 'This user email doesn\'t exist';
      status = 403;
    } else if (currentLoans[0]) {
      errorMessage = 'Unauthorised, You still have a not fully paid loan';
      status = 400;
    } else {
      // eslint-disable-next-line max-len
      var newLoan = (0, _loansHelper.addUserLoan)(new _Loan.Loan.Loan((0, _loansHelper.getLoanCount)(), req.body.userMail, Number.parseInt(req.body.tenor, 10), Number.parseInt(req.body.amount, 10)));
      res.status(200).send({
        status: 200,
        data: newLoan
      });
    }
  }

  if (errorMessage) {
    res.status(status).send({
      status: status,
      error: errorMessage
    });
  }
};

exports.addNewLoan = addNewLoan;
//# sourceMappingURL=userController.js.map