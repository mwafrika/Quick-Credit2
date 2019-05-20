"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLoanCount = getLoanCount;
exports.getDeniedLoans = exports.getPendingLoans = exports.getRepaidLoans = exports.getCurrentLoans = exports.getApprovedLoans = exports.getSingleLoan = exports.addUserLoan = exports.getAllLoans = exports.filterByUser = exports.updateLoan = void 0;

var _Loan = require("../models/Loan1");

/* eslint-disable linebreak-style */

/* eslint-disable max-len */

/* eslint-disable linebreak-style */

/* eslint-disable no-unused-vars */

/* eslint-disable import/prefer-default-export */

/* eslint-disable linebreak-style */
var loans = _Loan.myLoans;

var updateLoan = function updateLoan(loan) {
  _Loan.myLoans[loan.id] = loan;
  return _Loan.myLoans[loan.id];
};

exports.updateLoan = updateLoan;

function getLoanCount() {
  return _Loan.myLoans.length; // return Loans.length;
}

var filterByUser = function filterByUser(email, myloans) {
  return myloans.filter(email.userMail === email);
};

exports.filterByUser = filterByUser;

var getAllLoans = function getAllLoans(email) {
  if (email) return filterByUser(email, loans);
  return loans;
};

exports.getAllLoans = getAllLoans;

var addUserLoan = function addUserLoan(newLoan) {
  _Loan.myLoans.push(newLoan);

  return _Loan.myLoans[newLoan.id];
};

exports.addUserLoan = addUserLoan;

var getSingleLoan = function getSingleLoan(loanID) {
  return _Loan.myLoans[loanID];
};

exports.getSingleLoan = getSingleLoan;

var getApprovedLoans = function getApprovedLoans(email) {
  if (email) return email, filterByUser(email, _Loan.myLoans.filter(function (loan) {
    return loan.getStatus() === 'approved';
  }));
  return _Loan.myLoans.filter(function (loan) {
    return loan.getStatus() === 'approved';
  });
};

exports.getApprovedLoans = getApprovedLoans;

var getCurrentLoans = function getCurrentLoans(email) {
  return getApprovedLoans(email).filter(function (loan) {
    return loan.isRepaid() === false;
  });
};

exports.getCurrentLoans = getCurrentLoans;

var getRepaidLoans = function getRepaidLoans(email) {
  return getApprovedLoans(email).filter(function (loan) {
    return loan.isRepaid() === true;
  });
};

exports.getRepaidLoans = getRepaidLoans;

var getPendingLoans = function getPendingLoans(email) {
  if (email) return email, filterByUser(email, _Loan.myLoans.filter(function (loan) {
    return loan.getStatus() === 'pending';
  }));
  return _Loan.myLoans.filter(function (loan) {
    return loan.getStatus() === 'pending';
  });
};

exports.getPendingLoans = getPendingLoans;

var getDeniedLoans = function getDeniedLoans(email) {
  if (email) return email, filterByUser(email, _Loan.myLoans.filter(function (loan) {
    return loan.getStatus() === 'denied';
  }));
  return _Loan.myLoans.filter(function (loan) {
    return loan.getStatus() === 'denied';
  });
};

exports.getDeniedLoans = getDeniedLoans;
//# sourceMappingURL=loansHelper.js.map