"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _signup = require("../controllers/signup");

var _login = require("../controllers/login");

var _checkUser = require("../controllers/checkUser");

var _Userloan = require("../controllers/Userloan");

var _adminLoan = require("../controllers/adminLoan");

var _repaymentController = require("../controllers/repaymentController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable linebreak-style */

/* eslint-disable import/no-duplicates */

/* eslint-disable no-unused-vars */

/* eslint-disable linebreak-style */
var router = _express["default"].Router();

router.post('/v1/auth/signin', _login.login); // done

router.post('/v1/auth/signup', _signup.signup); // very good

router.patch('/v1/users/:userEmail/verify', _checkUser.verify); // done

router.get('/v1/loans/user/:email/', _Userloan.getUserLoan);
router.post('/v1/loans/', _Userloan.addNewLoan); // work well

router.get('/v1/loans', _adminLoan.getloans); // to get all loans

router.get('/v1/loans/:loanID', _adminLoan.getSpecificLoan); // work very well

router.patch('/v1/loans/:loanID', _adminLoan.approveLoan);
router.post('/v1/loans/:loanID/repayment', _repaymentController.addPayment); // done

router.get('/v1/loans/:loanID/repayment', _repaymentController.getRepayments); // done

var _default = router;
exports["default"] = _default;
//# sourceMappingURL=route.js.map