import { getSingleLoan } from '../helper/loansHelper';
import { Repayment } from '../models/Repayment1';
import { loanRepaymentHelper } from '../helper/repaymentH';
import { repayM, repayF } from '../DB/queries';
import { pool } from '../config/index';

// add payment need to remove

export const addPayment = (req, res) => {
  if (req.body.amount && (!isNaN(req.body.amount))) {
    pool.query(repayM([req.params.loanID, req.body.amount]), (err, resl) => {
      if (err) {
        console.log(err);
      } else if (resl.rowCount > 0) {
        res.status(200).send({ data: resl.rows[0] });
      } else {
        console.debug(resl);
      }
    });
  } else {
    res.status(400).send({
      status: 400,
      message: 'Please provide valid parameters',
    });
  }
};
export const getRepayments = (req, res) => {
  const loans = loanRepaymentHelper.getLoanRepayment(req.params.loanID);
  if (loans) {

    pool.query(repayF([]), (err, resl) => {
      if (err) {
        console.log(err);
      } else if (resl.rowCount > 0) {
        res.status(200).send({ data: resl.rows });
      }
    });

  } else {
    res.status(400).send({
      status: 400,
      message: 'Please provide a correct loan ID',
    });
  }
};
