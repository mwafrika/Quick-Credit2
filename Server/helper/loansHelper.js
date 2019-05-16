/* eslint-disable linebreak-style */
const { Loans , myLoans} = require('../models/Loan1');

function updateLoan(loan) {
  
  myLoans[loan.id] = loan;
  return myLoans[loan.id];
}
function getLoanCount() {
  return myLoans.length;
  // return Loans.length;
}
function filterByUser(email, myloans) {
  return myloans.filter(email => loan.userMail === email);
}
function getAllLoans(email) {
  if (email) return filterByUser(email, loans);
  return loans;
}
function addUserLoan(newLoan) {
  myLoans.push(newLoan);
  return myLoans[newLoan.id];
}
function getSingleLoan(loanID) {
  return myLoans[loanID];
}
function getApprovedLoans(email) {
  if (email) return (email, filterByUser(email, myLoans.filter(loan => loan.getStatus() === 'approved')));
  return myLoans.filter(loan => loan.getStatus() === 'approved');
}
function getCurrentLoans(email) {
  return getApprovedLoans(email).filter(loan => loan.isRepaid() === false);
}
function getRepaidLoans(email) {
  return getApprovedLoans(email).filter(loan => loan.isRepaid() === true);
}
function getPendingLoans(email) {
  if (email) return (email, filterByUser(email,myLoans.filter(loan => loan.getStatus() === 'pending')));
  return myLoans.filter(loan => loan.getStatus() === 'pending');
}
function getDeniedLoans(email) {
  if (email) return (email, filterByUser(email, myLoans.filter(loan => loan.getStatus() === 'denied')));
  return myLoans.filter(loan => loan.getStatus() === 'denied');
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
