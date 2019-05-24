export class Users {
  constructor(id, firstName, lastName, emails, password, Country, status, isAdmin, address) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = emails;
    this.Country = Country;
    this.isAdmin = isAdmin;
    this.password = password;
    this.status = status;
    this.address = address;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getFirstName() {
    return this.firstName;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  getLastName() {
    return this.lastName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  getEmails() {
    return this.emails;
  }

  setEmails(emails) {
    this.emails = emails;
  }

  getCountry() {
    return this.Country;
  }

  setCountry(Country) {
    this.Country = Country;
  }

  getIsAdmin() {
    return this.isAdmin;
  }

  setIsAdmin(isAdmin) {
    this.isAdmin = isAdmin;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  checkpass(password) {
    if (password !== this.password) return false;
    return true;
  }
}

const admin = new Users(0, 'mwafrika', 'mufungizi', 'mwafrikajosue@gmail.com', '123', 'congo', 'approved', true);
const user1 = new Users(1, 'mwafrika', 'mufungizi', 'josmwa@gmail.com', '123', 'congo', 'approved', false);
const user2 = new Users(2, 'mwafrika', 'mufungizi', 'josmwa@gmail.com', '123', 'congo', 'approved', false);
const user3 = new Users(3, 'mwafrika', 'mufungizi', 'josmwa@gmail.com', '123', 'congo', 'approved', false);
export const users = [admin, user1, user2, user3];
