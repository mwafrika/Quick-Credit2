"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */
var Repayment =
/*#__PURE__*/
function () {
  function Repayment(id, createOn, loanId, amount) {
    _classCallCheck(this, Repayment);

    this.id = id;
    this.createOn = createOn;
    this.loanId = loanId;
    this.amount = amount;
  }

  _createClass(Repayment, [{
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
    key: "getLoanId",
    value: function getLoanId() {
      return this.loanId;
    }
  }, {
    key: "setLoanId",
    value: function setLoanId(loanId) {
      this.loanId = loanId;
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
  }]);

  return Repayment;
}();

var defaultRepay = new Repayment(0, '12/3/2019', 4, 500);
var repay = [defaultRepay];
var rep1 = repay.push(new Repayment(new Repayment(1, '12/3/2019', 4, 500)));
var rep2 = repay.push(new Repayment(new Repayment(2, '12/3/2019', 4, 500)));
var rep3 = repay.push(new Repayment(new Repayment(3, '12/3/2019', 4, 500)));
var rep4 = repay.push(new Repayment(new Repayment(4, '12/3/2019', 4, 500)));
var rep5 = repay.push(new Repayment(new Repayment(5, '12/3/2019', 4, 500)));
var repayment = [defaultRepay, rep1, rep2, rep3, rep4, rep5];
module.exports = {
  Repayment: Repayment,
  repay: repay,
  repayment: repayment
};
//# sourceMappingURL=Repayment1.js.map