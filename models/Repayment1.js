/* eslint-disable linebreak-style */
class Repayment {
  constructor(id, createOn, loanId, amount) {
    this.id = id;
    this.createOn = createOn;
    this.loanId = loanId;
    this.amount = amount;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getCreateOn() {
    return this.createOn;
  }

  setCreateOn(createOn) {
    this.createOn = createOn;
  }

  getLoanId() {
    return this.loanId;
  }

  setLoanId(loanId) {
    this.loanId = loanId;
  }

  getAmount() {
    return this.amount;
  }

  setAmount(amount) {
    this.amount = amount;
  }
}
const defaultRepay = new Repayment(0, '12/3/2019', 4, 500);
const repay = [defaultRepay];
repay.push(new Repayment(new Repayment(0, '12/3/2019', 4, 500)));
repay.push(new Repayment(new Repayment(0, '12/3/2019', 4, 500)));
repay.push(new Repayment(new Repayment(0, '12/3/2019', 4, 500)));
repay.push(new Repayment(new Repayment(0, '12/3/2019', 4, 500)));
repay.push(new Repayment(new Repayment(0, '12/3/2019', 4, 500)));

module.exports = {
  Repayment, repay,
};
