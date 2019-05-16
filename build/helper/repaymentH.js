"use strict";

/* eslint-disable linebreak-style */
var _require = require('../models/Repayment1'),
    repayment = _require.repayment;

var loanHelper = require('./loansHelper');

function updateLoanPayment(loanID, newAmount) {
  var loan = loanHelper.getSingleLoan(loanID);
  loan.setBalance(loan.getBalance() - newAmount);
  return loanHelper.updateLoan(loan);
} // updateLoanPayment(0, loanRepayment.loanRepaymentData[0].getAmount());


updateLoanPayment(0, repayment[0].getAmount());

function addNewLoanRepayment(newRepayment) {
  repayment.push(newRepayment);
  return updateLoanPayment(newRepayment.getLoanId(), newRepayment.getAmount());
}

function getRepaymentCount() {
  return loanRepayment.repayment.length;
}

function getLoanRepayment(loanID) {
  // return loanRepayment.repayment.filter(repayment => repayment.loanId.toString() === loanID); // changed .getLoanId() to getId
  return repayment.filter(function (repayment) {
    return repayment.getLoanId === loanID;
  });
}

module.exports = {
  updateLoanPayment: updateLoanPayment,
  addNewLoanRepayment: addNewLoanRepayment,
  getRepaymentCount: getRepaymentCount,
  getLoanRepayment: getLoanRepayment
};
//# sourceMappingURL=repaymentH.js.map