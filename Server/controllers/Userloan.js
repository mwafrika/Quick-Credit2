/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import {
  getCurrentLoans, getRepaidLoans, getAllLoans, addUserLoan, getLoanCount,
} from '../helper/loansHelper';
import { getSingleUser } from '../helper/userHelper';
import { Loan } from '../models/Loan1';
import { Loans } from '../DB/queries';
import { pool } from '../config/index';

export const getUserLoan = (req, res) => {
  pool.query('SELECT status,repaid FROM loans', [], (err, resl) => {
    if (err) throw err;
    if (resl.rowCount > 0) {
      res.status(200).send({
        status: 200,
        data: resl,
      });
    } else {
      res.status(200).send({
        status: 200,
        data: { status: 'aprooved' },
      });
    }
  });
};
export const addNewLoan = (req, res) => {
  let errorMessage = '';
  let status = 400;
  if (!req.body.email) errorMessage = 'Bad request, Please provide the user email';
  else if (!req.body.tenor || Number.isNaN(req.body.tenor)) errorMessage = 'Bad request, Please provide a valide tenor';
  else if (!req.body.amount || Number.isNaN(req.body.amount)) errorMessage = 'Please provide a valide amount';
  if (errorMessage) {
    res.status(400).send({
      status: 400,
      data: errorMessage,
    });
  } else {
    pool.query('SELECT * FROM loans WHERE email = $1 ', [req.body.email], (err, resl) => {
      if (err) throw err;
      if (resl.rowCount > 0) {
        res.status(400).send({
          status: 400,
          data: 'Unauthorised, You still have a not fully paid loan',
        });
      } else {
        pool.query('INSERT INTO loans(tenor, amount, email) VALUES ($1, $2, $3) RETURNING *',
          [req.body.tenor, req.body.amount, req.body.email], (err, resl) => {
            if (err) throw err;
            res.status(200).send({
              status: 200,
              data: resl.rows[0],
            });
          });
      }
      const user = getSingleUser(req.body.userMail);
      const currentLoans = getCurrentLoans(req.body.userMail);
      if (!user[0]) {
        errorMessage = 'This user email doesn\'t exist';
        status = 403;
      } else if (currentLoans[0]) {
        errorMessage = '';
        status = 400;
      } else {
        const newLoan = addUserLoan(new Loan.Loan(getLoanCount(), req.body.userMail, Number.parseInt(req.body.tenor, 10), Number.parseInt(req.body.amount, 10)));

        pool.query(Loans([req.body.user, req.body.createdOn, req.body.status, req.body.repaid, req.body.tenor, req.body.amount, req.body.paymentInstallment, req.body.balance, req.body.interest]), (err, resl) => {
          if (err) {
            console.log(err);
          } else if (resl.rowCount > 0) {
            res.status(200).send({ data: resl.rows[0] });
          }
        });
      }
    });
  }
};
