/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
export class Repayment {
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
export const repay = [defaultRepay];
repay.push(new Repayment(new Repayment(1, '12/3/2019', 4, 500)));
repay.push(new Repayment(new Repayment(2, '12/3/2019', 4, 500)));
repay.push(new Repayment(new Repayment(3, '12/3/2019', 4, 500)));
repay.push(new Repayment(new Repayment(4, '12/3/2019', 4, 500)));
repay.push(new Repayment(new Repayment(5, '12/3/2019', 4, 500)));

export const repayment = [defaultRepay, repay];
