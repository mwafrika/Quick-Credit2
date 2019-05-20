/* eslint-disable linebreak-style */

import {
  getCurrentLoans,
  getRepaidLoans,
  getAllLoans,
  getSingleLoan,
  updateLoan,
} from '../helper/loansHelper';

export const getloans = (req, res) => {
  if (req.query.status === 'approved' && req.query.repaid === 'false') {
    res.status(200).send({
      status: 200,
      data: getCurrentLoans(),
    });
  } else if (req.query.status === 'approved' && req.query.repaid === 'true') {
    res.status(200).send({
      status: 200,
      data: getRepaidLoans(),
    });
  } else {
    res.status(200).send({
      status: 200,
      data: getAllLoans(),
    });
  }
};

export const getSpecificLoan = (req, res) => {
  const { loanID } = req.params;
  if (loanID) {
    const loan = getSingleLoan(loanID);
    if (loan) {
      res.status(200).send({
        status: 200,
        data: loan,
      });
    } else {
      res.status(400).send({
        status: 400,
        error: 'We can\'t find a loan with such ID',
      });
    }
  } else {
    res.status(400).send({
      status: 400,
      error: 'Bad request, please provide the loan ID = ',
    });
  }
};

export const approveLoan = (req, res) => {
  const loan = getSingleLoan(req.params.loanID);
  if (loan) {
    if (loan.status === 'approved') {
      res.status(401).send({
        status: 401,
        error: 'you are not authorised to modify the status of this loan',
      });
    } else if (req.body.status === 'approved') {
      loan.status = 'approved';
      res.status(200).send({
        status: 200,
        data: updateLoan(loan),
      });
    } else if (req.body.status === 'rejected') {
      loan.status = 'rejected';
      res.status(200).send({
        status: 200,
        data: updateLoan(loan),
      });
    } else {
      res.status(400).send({
        status: 400,
        error: 'Bad request, the new status is not correct ',
      });
    }
  } else {
    res.status(400).send({
      status: 400,
      error: 'Bad request, this loan does not exist ',
    });
  }
};
