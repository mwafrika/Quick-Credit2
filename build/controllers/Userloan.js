"use strict";

/* eslint-disable linebreak-style */
var _require = require('../helper/loansHelper'),
    getCurrentLoans = _require.getCurrentLoans,
    getRepaidLoans = _require.getRepaidLoans,
    getAllLoans = _require.getAllLoans,
    addUserLoan = _require.addUserLoan,
    getLoanCount = _require.getLoanCount;

var _require2 = require('../helper/userHelper.js'),
    getSingleUser = _require2.getSingleUser;

var Loan = require('../models/Loan1');

function getUserLoan(req, res) {
  if (req.query.status === 'approved' && req.query.repaid === 'false') {
    res.status(200).send({
      status: 200,
      data: JSON.stringify(getCurrentLoans(req.params.email))
    });
  } else if (req.query.status === 'approved' && req.query.repaid === 'true') {
    res.status(200).send({
      status: 200,
      data: JSON.stringify(getRepaidLoans(req.params.email))
    });
  } else {
    res.status(200).send({
      status: 200,
      data: JSON.stringify(getAllLoans(req.params.email))
    });
  }
}

function addNewLoan(req, res) {
  var errorMessage = '';
  var status = 400;
  if (!req.body.userMail) errorMessage = 'Bad request, Please provide the user email';else if (!req.body.tenor || Number.isNaN(req.body.tenor)) errorMessage = 'Bad request, Please provide a valide tenor';else if (!req.body.amount || Number.isNaN(req.body.amount)) errorMessage = 'Please provide a valide amount';else {
    var user = getSingleUser(req.body.userMail);
    var currentLoans = getCurrentLoans(req.body.userMail);

    if (!user[0]) {
      errorMessage = 'This user email doesn\'t exist';
      status = 403;
    } else if (currentLoans[0]) {
      errorMessage = 'Unauthorised, You still have a not fully paid loan';
      status = 400;
    } else {
      // eslint-disable-next-line max-len
      var newLoan = addUserLoan(new Loan.Loan(getLoanCount(), req.body.userMail, Number.parseInt(req.body.tenor, 10), Number.parseInt(req.body.amount, 10)));
      res.status(200).send({
        status: 200,
        data: JSON.stringify(newLoan)
      });
    }
  }

  if (errorMessage) {
    res.status(status).send({
      status: status,
      error: errorMessage
    });
  }
}

module.exports = {
  getUserLoan: getUserLoan,
  addNewLoan: addNewLoan
};
//# sourceMappingURL=Userloan.js.map