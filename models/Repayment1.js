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
const defaultRepay = new Repayment(1, '12/3/2019', 4, 500);
const repay = [defaultRepay];
repay.push(1, '1/2/2013', 6, 400);
repay.push(2, '2/3/2019', 4, 300);
repay.push(3, '1/2/2013', 6, 400);
repay.push(5, '2/3/2019', 4, 300);

module.exports = {
  Repayment, repay,
};
