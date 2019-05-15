/* eslint-disable linebreak-style */
const { loans } = require('../model/Loan');

function updateLoan(loan) {
  loans[loan.id] = loan;
  return loans[loan.id];
}
function getLoanCount() {
  return loans.length;
}
function filterByUser(email, myloans) {
  return myloans.filter(loan => loan.userMail === email);
}
function getAllLoans(email) {
  if (email) return filterByUser(email, loans);
  return loans;
}
function addUserLoan(newLoan) {
  loans.push(newLoan);
  return loans[newLoan.id];
}
function getSingleLoan(loanID) {
  return loans[loanID];
}
function getApprovedLoans(email) {
  if (email) return (email, filterByUser(email, loans.filter(loan => loan.getStatus() === 'approved')));
  return loans.filter(loan => loan.getStatus() === 'approved');
}
function getCurrentLoans(email) {
  return getApprovedLoans(email).filter(loan => loan.isRepaid() === false);
}
function getRepaidLoans(email) {
  return getApprovedLoans(email).filter(loan => loan.isRepaid() === true);
}
function getPendingLoans(email) {
  if (email) return (email, filterByUser(email, loans.filter(loan => loan.getStatus() === 'pending')));
  return loans.filter(loan => loan.getStatus() === 'pending');
}
function getDeniedLoans(email) {
  if (email) return (email, filterByUser(email, loans.filter(loan => loan.getStatus() === 'denied')));
  return loans.filter(loan => loan.getStatus() === 'denied');
}

module.exports = {
  updateLoan,
  getLoanCount,
  filterByUser,
  getAllLoans,
  addUserLoan,
  getSingleLoan,
  getApprovedLoans,
  getCurrentLoans,
  getRepaidLoans,
  getPendingLoans,
  getDeniedLoans,
};
