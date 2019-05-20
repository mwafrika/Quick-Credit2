/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { Loans, myLoans } from '../models/Loan1';

const loans = myLoans;
export const updateLoan = (loan) => {
  myLoans[loan.id] = loan;
  return myLoans[loan.id];
};
export function getLoanCount() {
  return myLoans.length;
  // return Loans.length;
}
export const filterByUser = (email, myloans) => myloans.filter(email.userMail === email);
export const getAllLoans = (email) => {
  if (email) return filterByUser(email, loans);
  return loans;
};
export const addUserLoan = (newLoan) => {
  myLoans.push(newLoan);
  return myLoans[newLoan.id];
};
export const getSingleLoan = loanID => myLoans[loanID];
export const getApprovedLoans = (email) => {
  if (email) return (email, filterByUser(email, myLoans.filter(loan => loan.getStatus() === 'approved')));
  return myLoans.filter(loan => loan.getStatus() === 'approved');
};
export const getCurrentLoans = email => getApprovedLoans(email).filter(loan => loan.isRepaid() === false);
export const getRepaidLoans = email => getApprovedLoans(email).filter(loan => loan.isRepaid() === true);
export const getPendingLoans = (email) => {
  if (email) return (email, filterByUser(email, myLoans.filter(loan => loan.getStatus() === 'pending')));
  return myLoans.filter(loan => loan.getStatus() === 'pending');
};
export const getDeniedLoans = (email) => {
  if (email) return (email, filterByUser(email, myLoans.filter(loan => loan.getStatus() === 'denied')));
  return myLoans.filter(loan => loan.getStatus() === 'denied');
};
