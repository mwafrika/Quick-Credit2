"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.approveLoan = exports.getSpecificLoan = exports.getloans = void 0;

var _loansHelper = require("../helper/loansHelper");

/* eslint-disable linebreak-style */
var getloans = function getloans(req, res) {
  if (req.query.status === 'approved' && req.query.repaid === 'false') {
    res.status(200).send({
      status: 200,
      data: (0, _loansHelper.getCurrentLoans)()
    });
  } else if (req.query.status === 'approved' && req.query.repaid === 'true') {
    res.status(200).send({
      status: 200,
      data: (0, _loansHelper.getRepaidLoans)()
    });
  } else {
    res.status(200).send({
      status: 200,
      data: (0, _loansHelper.getAllLoans)()
    });
  }
};

exports.getloans = getloans;

var getSpecificLoan = function getSpecificLoan(req, res) {
  var loanID = req.params.loanID;

  if (loanID) {
    var loan = (0, _loansHelper.getSingleLoan)(loanID);

    if (loan) {
      res.status(200).send({
        status: 200,
        data: loan
      });
    } else {
      res.status(400).send({
        status: 400,
        error: 'We can\'t find a loan with such ID'
      });
    }
  } else {
    res.status(400).send({
      status: 400,
      error: 'Bad request, please provide the loan ID = '
    });
  }
};

exports.getSpecificLoan = getSpecificLoan;

var approveLoan = function approveLoan(req, res) {
  var loan = (0, _loansHelper.getSingleLoan)(req.params.loanID);

  if (loan) {
    if (loan.status === 'approved') {
      res.status(401).send({
        status: 401,
        error: 'you are not authorised to modify the status of this loan'
      });
    } else if (req.body.status === 'approved') {
      loan.status = 'approved';
      res.status(200).send({
        status: 200,
        data: (0, _loansHelper.updateLoan)(loan)
      });
    } else if (req.body.status === 'rejected') {
      loan.status = 'rejected';
      res.status(200).send({
        status: 200,
        data: (0, _loansHelper.updateLoan)(loan)
      });
    } else {
      res.status(400).send({
        status: 400,
        error: 'Bad request, the new status is not correct '
      });
    }
  } else {
    res.status(400).send({
      status: 400,
      error: 'Bad request, this loan does not exist '
    });
  }
};

exports.approveLoan = approveLoan;
//# sourceMappingURL=adminLoan.js.map