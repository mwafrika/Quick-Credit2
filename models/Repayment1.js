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
const rep1 = repay.push(new Repayment(new Repayment(1, '12/3/2019', 4, 500)));
const rep2 = repay.push(new Repayment(new Repayment(2, '12/3/2019', 4, 500)));
const rep3 = repay.push(new Repayment(new Repayment(3, '12/3/2019', 4, 500)));
const rep4 = repay.push(new Repayment(new Repayment(4, '12/3/2019', 4, 500)));
const rep5 = repay.push(new Repayment(new Repayment(5, '12/3/2019', 4, 500)));

const repayment = [defaultRepay, rep1, rep2, rep3, rep4, rep5];
module.exports = {
  Repayment, repay, repayment,
};
