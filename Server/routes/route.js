/* eslint-disable linebreak-style */
import Router from 'express';
import express from 'express';
import signup from '../controllers/signup';

import {login} from '../controllers/login';
import verify from '../controllers/checkUser';
import { getUserLoan, addNewLoan } from '../controllers/Userloan';

import { getloans, getSpecificLoan, approveLoan } from '../controllers/adminLoan';
import { addPayment, getRepayments } from '../controllers/repaymentController';

const router = express.Router();
router.post('/v1/auth/signin', login); // done
router.post('/v1/auth/signup', signup); // very good
router.patch('/v1/users/:userEmail/verify', verify); // done
router.get('/v1/loans/user/:email/', getUserLoan);
router.post('/v1/loans/', addNewLoan); // work well
router.get('/v1/loans', getloans); // to get all loans
router.get('/v1/loans/:loanID', getSpecificLoan); // work very well
router.patch('/v1/loans/:loanID', approveLoan);
router.post('/v1/loans/:loanID/repayment', addPayment); // done
router.get('/v1/loans/:loanID/repayment', getRepayments);// done

export default router;
