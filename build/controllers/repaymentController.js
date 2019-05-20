"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRepayments = exports.addPayment = void 0;

var _loansHelper = require("../helper/loansHelper");

var _Repayment = require("../models/Repayment1");

var _repaymentH = require("../helper/repaymentH");

/* eslint-disable linebreak-style */

/* eslint-disable no-restricted-globals */

/* eslint-disable radix */

/* eslint-disable max-len */

/* eslint-disable linebreak-style */
var addPayment = function addPayment(req, res) {
  var loan = (0, _loansHelper.getSingleLoan)(req.params.loanID);

  if (loan) {
    if (!loan.isRepaid()) {
      if (req.body.amount && !isNaN(req.body.amount)) {
        var tenorCovered = Number.parseFloat(req.body.amount) / loan.getPaymentInstallment();
        var newRepayment = new _Repayment.Repayment(_repaymentH.loanRepaymentHelper.getRepaymentCount(), new Date(), loan.id, req.body.amount);
        res.status(200).send({
          status: 200,
          data: _repaymentH.loanRepaymentHelper.addNewLoanRepayment(newRepayment)
        });
      } else {
        res.status(400).send({
          status: 400,
          message: 'Please provide valid parameters'
        });
      }
    } else {
      res.status(401).send({
        status: 401,
        message: 'This loan is completly repaid'
      });
    }
  } else {
    res.status(400).send({
      status: 400,
      message: 'There is no loan with such an ID'
    });
  }
};

exports.addPayment = addPayment;

var getRepayments = function getRepayments(req, res) {
  var loans = _repaymentH.loanRepaymentHelper.getLoanRepayment(req.params.loanID);

  if (loans) {
    res.status(200).send({
      status: 200,
      data: loans
    });
  } else {
    res.status(400).send({
      status: 400,
      message: 'Please provide a correct loan ID'
    });
  }
};

exports.getRepayments = getRepayments;
//# sourceMappingURL=repaymentController.js.map