import Router from 'express';
import express from 'express';
import  signup  from '../controllers/signup';
import checkAuth from '../middleware/authentication';

import login from '../controllers/login';
import { verify } from '../controllers/checkUser';
import { getUserLoan, addNewLoan } from '../controllers/Userloan';

import { getloans, getSpecificLoan, approveLoan } from '../controllers/adminLoan';
import { addPayment, getRepayments } from '../controllers/repaymentController';

const router = express.Router();

router.post('/v1/auth/signin', login);
router.post('/v1/auth/signup', signup); 
router.patch('/v1/users/:userEmail/verify', verify); // verify with email in the db
router.get('/v1/loans/user/:email/', getUserLoan); 
router.post('/v1/loans/', addNewLoan); // ok
router.get('/v1/loans', getloans); // ok
router.get('/v1/loans/:loanID', getSpecificLoan); // ok
router.patch('/v1/loans/:loanID', approveLoan); // ok
router.post('/v1/loans/:loanID/repayment', addPayment);
router.get('/v1/loans/:loanID/repayment', getRepayments);

export default router;
