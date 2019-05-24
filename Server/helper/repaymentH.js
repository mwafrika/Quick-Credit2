const { repayment } = require('../models/Repayment1');
const loansHelper = require('./loansHelper');

function updateLoanPayment(loanID, newAmount) {
  const loan = loansHelper.getSingleLoan(loanID);
  loan.setBalance(loan.getBalance() - newAmount);
  return loansHelper.updateLoan(loan);
}
updateLoanPayment(0, repayment[0].getAmount());

function addNewLoanRepayment(newRepayment) {
  repayment.push(newRepayment);
  return updateLoanPayment(newRepayment.loanId, newRepayment.getAmount());
}
function getRepaymentCount() {
  return repayment.length;
}
function getLoanRepayment(loanID) {
  return repayment.filter(repayment => repayment.getLoanId === loanID);
}
export const loanRepaymentHelper = {
  updateLoanPayment,
  addNewLoanRepayment,
  getRepaymentCount,
  getLoanRepayment,
};
