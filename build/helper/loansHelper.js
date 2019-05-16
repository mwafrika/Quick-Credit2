"use strict";

/* eslint-disable linebreak-style */
var _require = require('../models/Loan1'),
    Loans = _require.Loans,
    myLoans = _require.myLoans;

function updateLoan(loan) {
  myLoans[loan.id] = loan;
  return myLoans[loan.id];
}

function getLoanCount() {
  return myLoans.length; // return Loans.length;
}

function filterByUser(email, myloans) {
  return myloans.filter(function (email) {
    return email.userMail === email;
  });
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
  if (email) return email, filterByUser(email, myLoans.filter(function (loan) {
    return loan.getStatus() === 'approved';
  }));
  return myLoans.filter(function (loan) {
    return loan.getStatus() === 'approved';
  });
}

function getCurrentLoans(email) {
  return getApprovedLoans(email).filter(function (loan) {
    return loan.isRepaid() === false;
  });
}

function getRepaidLoans(email) {
  return getApprovedLoans(email).filter(function (loan) {
    return loan.isRepaid() === true;
  });
}

function getPendingLoans(email) {
  if (email) return email, filterByUser(email, myLoans.filter(function (loan) {
    return loan.getStatus() === 'pending';
  }));
  return myLoans.filter(function (loan) {
    return loan.getStatus() === 'pending';
  });
}

function getDeniedLoans(email) {
  if (email) return email, filterByUser(email, myLoans.filter(function (loan) {
    return loan.getStatus() === 'denied';
  }));
  return myLoans.filter(function (loan) {
    return loan.getStatus() === 'denied';
  });
}

module.exports = {
  updateLoan: updateLoan,
  getLoanCount: getLoanCount,
  filterByUser: filterByUser,
  getAllLoans: getAllLoans,
  addUserLoan: addUserLoan,
  getSingleLoan: getSingleLoan,
  getApprovedLoans: getApprovedLoans,
  getCurrentLoans: getCurrentLoans,
  getRepaidLoans: getRepaidLoans,
  getPendingLoans: getPendingLoans,
  getDeniedLoans: getDeniedLoans
};
//# sourceMappingURL=loansHelper.js.map