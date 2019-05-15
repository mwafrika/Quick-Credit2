/* eslint-disable linebreak-style */
import Router from 'express';
import signup from '../controllers/signup_controller';

import login from '../controller/login_controller';
import verify from '../controller/verify_user_controller';

import { getUserLoan, addNewLoan } from '../controller/loan_user_controller';

import { getloans, getSpecificLoan, approveLoan } from '../controller/loan_admin_controller';
import { addPayment, getRepayments } from '../controller/loanRepayment_controller';

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
