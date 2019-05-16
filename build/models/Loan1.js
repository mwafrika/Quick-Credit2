"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */

/* eslint-disable max-len */

/* eslint-disable semi */

/* eslint-disable no-unreachable */

/* eslint-disable no-lone-blocks */

/* eslint-disable no-undef */

/* eslint-disable linebreak-style */
var Loan =
/*#__PURE__*/
function () {
  function Loan(id, user, createOn, status, repaid, tenor, amount, paymentInstallment, balance, interest) {
    _classCallCheck(this, Loan);

    this.id = id;
    this.user = user;
    this.createOn = createOn;
    this.status = status;
    this.repaid = repaid;
    this.tenor = tenor;
    this.amount = amount;
    this.paymentInstallment = paymentInstallment;
    this.balance = balance;
    this.interest = interest;
  }

  _createClass(Loan, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
  }, {
    key: "getUser",
    value: function getUser() {
      return this.user;
    }
  }, {
    key: "setUser",
    value: function setUser(user) {
      this.user = user;
    }
  }, {
    key: "getCreateOn",
    value: function getCreateOn() {
      return this.createOn;
    }
  }, {
    key: "setCreateOn",
    value: function setCreateOn(createOn) {
      this.createOn = createOn;
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.status;
    }
  }, {
    key: "setStatus",
    value: function setStatus(status) {
      this.status = status;
    }
  }, {
    key: "getRepaid",
    value: function getRepaid() {
      return this.repaid;
    }
  }, {
    key: "setRepaid",
    value: function setRepaid(repaid) {
      this.repaid = repaid;
    }
  }, {
    key: "getTenor",
    value: function getTenor() {
      return this.tenor;
    }
  }, {
    key: "setTenor",
    value: function setTenor(tenor) {
      this.tenor = tenor;
    }
  }, {
    key: "getAmount",
    value: function getAmount() {
      return this.amount;
    }
  }, {
    key: "setAmount",
    value: function setAmount(amount) {
      this.amount = amount;
    }
  }, {
    key: "getPaymentInstallment",
    value: function getPaymentInstallment() {
      return this.paymentInstallment;
    }
  }, {
    key: "setPaymentInstallment",
    value: function setPaymentInstallment(paymentInstallment) {
      this.paymentInstallment = paymentInstallment;
    }
  }, {
    key: "getBalance",
    value: function getBalance() {
      return this.balance;
    }
  }, {
    key: "setBalance",
    value: function setBalance(balance) {
      this.balance = balance;
    }
  }, {
    key: "getInterest",
    value: function getInterest() {
      return this.interest;
    }
  }, {
    key: "setInterest",
    value: function setInterest(interest) {
      this.interest = interest;
    }
  }, {
    key: "isRepaid",
    value: function isRepaid() {
      return this.repaid;
    }
  }, {
    key: "setRepaidStatus",
    value: function setRepaidStatus(repaidStatus) {
      this.repaid = repaidStatus;
    }
  }, {
    key: "setBalance",
    value: function setBalance(balance) {
      this.balance = balance;

      if (balance < 0) {
        this.setRepaidStatus(true);
        this.balance = 0;
      }
    }
  }]);

  return Loan;
}();

var defaultLoan = new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%');
var myLoans = [defaultLoan];
myLoans.push(new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%'));
myLoans.push(new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%'));
myLoans.push(new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%'));
myLoans.push(new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%'));
myLoans.push(new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%'));
myLoans.push(new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%'));
module.exports = {
  Loan: Loan,
  myLoans: myLoans
};
//# sourceMappingURL=Loan1.js.map