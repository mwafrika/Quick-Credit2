import {
  getCurrentLoans,
  getRepaidLoans,
  getAllLoans,
  getSingleLoan,
  updateLoan,
} from '../helper/loansHelper';
import { pool } from '../config/index';

export const getloans = (req, res) => {
  // if (req.query.status === 'approved' && req.query.repaid === 'false') {
  pool.query('SELECT * FROM loans', [], (err, resl) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send({
        status: 200,
        data: resl.rows,
      });
    }
  });

  // } else if (req.query.status === 'approved' && req.query.repaid === 'true') {
  //   res.status(200).send({
  //     status: 200,
  //     data: getRepaidLoans(),
  //   });
  // } else {
  //   res.status(200).send({
  //     status: 200,
  //     data: getAllLoans(),
  //   });
  // }
};

export const getSpecificLoan = (req, res) => {
  const { loanID } = req.params;
  if (loanID) {
    pool.query('SELECT * FROM loans WHERE id = $1', [loanID], (err, resl) => {
      if (err) {
        throw err;
      } else if (resl.rowCount > 0) {
        res.status(200).send({
          status: 200,
          data: resl.rows,
        });
      } else {
        res.status(400).send({
          status: 400,
          error: 'We can\'t find a loan with such ID',
        });
      }
    });
  } else {
    res.status(400).send({
      status: 400,
      error: 'Bad request, please provide the loan ID = ',
    });
  }
};

export const approveLoan = (req, res) => {
  pool.query('UPDATE loans SET id =$1 ', [req.params.loanID], (err, resl) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send({
        status: 200,
        data: resl,
      });
    }
  });
};
