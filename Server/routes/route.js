/* eslint-disable linebreak-style */
import Router from 'express';
import signup from '../controllers/signup';

import login from '../controllers/login';
import verify from '../controllers/checkUser';

import { getUserLoan, addNewLoan } from '../controllers/Userloan';

import { getloans, getSpecificLoan, approveLoan } from '../controllers/adminLoan';
import { addPayment, getRepayments } from '../controllers/repaymentController';

const router = Router();
router.post('/v1/auth/signin', login);
router.post('/v1/auth/signup', signup);
router.patch('/v1/users/:userEmail/verify', verify);
router.get('/v1/loans/user/:email/', getUserLoan);
router.post('/v1/loans/', addNewLoan);
router.get('/v1/loans', getloans);
router.get('/v1/loans/:loanID', getSpecificLoan);
router.patch('/v1/loans/:loanID', approveLoan);
router.post('/v1/loans/:loanID/repayment', addPayment);
router.get('/v1/loans/:loanID/repayment', getRepayments);
export default router;
