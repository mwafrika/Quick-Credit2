"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loanRepaymentHelper = void 0;

/* eslint-disable linebreak-style */

/* eslint-disable import/prefer-default-export */

/* eslint-disable linebreak-style */

/* eslint-disable no-shadow */

/* eslint-disable linebreak-style */
var _require = require('../models/Repayment1'),
    repayment = _require.repayment;

var loansHelper = require('./loansHelper');

function updateLoanPayment(loanID, newAmount) {
  var loan = loansHelper.getSingleLoan(loanID);
  loan.setBalance(loan.getBalance() - newAmount);
  return loansHelper.updateLoan(loan);
} // updateLoanPayment(0, loanRepayment.loanRepaymentData[0].getAmount());


updateLoanPayment(0, repayment[0].getAmount());

function addNewLoanRepayment(newRepayment) {
  repayment.push(newRepayment);
  return updateLoanPayment(newRepayment.loanId, newRepayment.getAmount());
}

function getRepaymentCount() {
  return repayment.length;
}

function getLoanRepayment(loanID) {
  return repayment.filter(function (repayment) {
    return repayment.getLoanId === loanID;
  });
}

var loanRepaymentHelper = {
  updateLoanPayment: updateLoanPayment,
  addNewLoanRepayment: addNewLoanRepayment,
  getRepaymentCount: getRepaymentCount,
  getLoanRepayment: getLoanRepayment
};
exports.loanRepaymentHelper = loanRepaymentHelper;
//# sourceMappingURL=repaymentH.js.map