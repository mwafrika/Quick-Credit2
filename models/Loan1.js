/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable semi */
/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */

class Loan {
  constructor(id, user, createOn, status, repaid, tenor, amount, paymentInstallment, balance, interest) {
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

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }

  getCreateOn() {
    return this.createOn;
  }

  setCreateOn(createOn) {
    this.createOn = createOn;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }

  getRepaid() {
    return this.repaid;
  }

  setRepaid(repaid) {
    this.repaid = repaid;
  }

  getTenor() {
    return this.tenor;
  }

  setTenor(tenor) {
    this.tenor = tenor;
  }

  getAmount() {
    return this.amount;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  getPaymentInstallment() {
    return this.paymentInstallment;
  }

  setPaymentInstallment(paymentInstallment) {
    this.paymentInstallment = paymentInstallment;
  }

  getBalance() {
    return this.balance;
  }

  setBalance(balance) {
    this.balance = balance;
  }

  getInterest() {
    return this.interest;
  }

  setInterest(interest) {
    this.interest = interest;
  }
}

const defaultLoan = new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%');
const myLoans = [defaultLoan];
myLoans.push(new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%'));
myLoans.push(new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%'));
myLoans.push(new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%'));
myLoans.push(new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%'));
myLoans.push(new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%'));
myLoans.push(new Loan(1, 'mwafrika', '12/1/2019', 'approved', true, '1 month', 500, '50/month', 600, '5%'));

module.exports = {
  Loan, myLoans,
};
