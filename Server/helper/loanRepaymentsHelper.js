/* eslint-disable linebreak-style */
const loanRepayment = require('../model/LoanRepayment');
const loanHelper = require('./loansHelper');

function updateLoanPayment(loanID, newAmount) {
  const loan = loanHelper.getSingleLoan(loanID);
  loan.setBalance(loan.getBalance() - newAmount);
  return loanHelper.updateLoan(loan);
}
updateLoanPayment(0, loanRepayment.loanRepaymentData[0].getAmount());

function addNewLoanRepayment(newRepayment) {
  loanRepayment.loanRepaymentData.push(newRepayment);
  return updateLoanPayment(newRepayment.getLoanId(), newRepayment.getAmount());
}
function getRepaymentCount() {
  return loanRepayment.loanRepaymentData.length;
}
function getLoanRepayment(loanID) {
  return loanRepayment.loanRepaymentData.filter(repayment => repayment.getLoanId().toString()
   === loanID);
}
module.exports = {
  updateLoanPayment,
  addNewLoanRepayment,
  getRepaymentCount,
  getLoanRepayment,
};
