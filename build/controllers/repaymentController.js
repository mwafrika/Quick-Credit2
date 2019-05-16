"use strict";

/* eslint-disable linebreak-style */

/* eslint-disable no-restricted-globals */

/* eslint-disable radix */

/* eslint-disable max-len */

/* eslint-disable linebreak-style */
var loanHelper = require('../helper/loansHelper');

var LoanRepayment = require('../models/Repayment1');

var loanRepaymentHelper = require('../helper/repaymentH');

function addPayment(req, res) {
  var loan = loanHelper.getSingleLoan(req.params.loanID);

  if (loan) {
    if (!loan.isRepaid()) {
      if (req.body.amount && !isNaN(req.body.amount)) {
        var tenorCovered = Number.parseFloat(req.body.amount) / loan.getPaymentInstallment();
        var newRepayment = new LoanRepayment.LoanRepayment(loanRepaymentHelper.getRepaymentCount(), loan.getID(), req.body.amount, tenorCovered);
        res.status(200).send({
          status: 200,
          data: JSON.stringify(loanRepaymentHelper.addNewLoanRepayment(newRepayment))
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
}

function getRepayments(req, res) {
  var loans = loanRepaymentHelper.getLoanRepayment(req.params.loanID);

  if (loans) {
    res.status(200).send({
      status: 200,
      data: JSON.stringify(loans)
    });
  } else {
    res.status(400).send({
      status: 400,
      message: 'Please provide a correct loan ID'
    });
  }
}

module.exports = {
  addPayment: addPayment,
  getRepayments: getRepayments
};
//# sourceMappingURL=repaymentController.js.map