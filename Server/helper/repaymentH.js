/* eslint-disable linebreak-style */
const {repayment} = require('../models/Repayment1');
const loanHelper = require('./loansHelper');

function updateLoanPayment(loanID, newAmount) {
  const loan = loanHelper.getSingleLoan(loanID);
  loan.setBalance(loan.getBalance() - newAmount);
  return loanHelper.updateLoan(loan);
}
// updateLoanPayment(0, loanRepayment.loanRepaymentData[0].getAmount());
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
  return repayment.filter(repayment => repayment.getLoanId === loanID);
}
module.exports = {
  updateLoanPayment,
  addNewLoanRepayment,
  getRepaymentCount,
  getLoanRepayment,
};
