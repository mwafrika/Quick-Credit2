"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = exports.Users = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */

/* eslint-disable linebreak-style */
var jwt = require('Jsonwebtoken');

var Users =
/*#__PURE__*/
function () {
  function Users(id, firstName, lastName, emails, password, Country, status, isAdmin, address) {
    _classCallCheck(this, Users);

    // this.jwt = jwt();
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

  _createClass(Users, [{
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
    key: "getFirstName",
    value: function getFirstName() {
      return this.firstName;
    }
  }, {
    key: "setFirstName",
    value: function setFirstName(firstName) {
      this.firstName = firstName;
    }
  }, {
    key: "getLastName",
    value: function getLastName() {
      return this.lastName;
    }
  }, {
    key: "setLastName",
    value: function setLastName(lastName) {
      this.lastName = lastName;
    }
  }, {
    key: "getEmails",
    value: function getEmails() {
      return this.emails;
    }
  }, {
    key: "setEmails",
    value: function setEmails(emails) {
      this.emails = emails;
    }
  }, {
    key: "getCountry",
    value: function getCountry() {
      return this.Country;
    }
  }, {
    key: "setCountry",
    value: function setCountry(Country) {
      this.Country = Country;
    }
  }, {
    key: "getIsAdmin",
    value: function getIsAdmin() {
      return this.isAdmin;
    }
  }, {
    key: "setIsAdmin",
    value: function setIsAdmin(isAdmin) {
      this.isAdmin = isAdmin;
    }
  }, {
    key: "getPassword",
    value: function getPassword() {
      return this.password;
    }
  }, {
    key: "setPassword",
    value: function setPassword(password) {
      this.password = password;
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
    key: "getAddress",
    value: function getAddress() {
      return this.address;
    }
  }, {
    key: "setAddress",
    value: function setAddress(address) {
      this.address = address;
    }
  }, {
    key: "checkpass",
    value: function checkpass(password) {
      if (password !== this.password) return false;
      return true;
    }
  }]);

  return Users;
}(); // const users=[]; 


exports.Users = Users;
var admin = new Users(1, 'mwafrika', 'mufungizi', 'josmwa@gmail.com', 'josmwa', 'congo', 'approved', true);
var user1 = new Users(1, 'mwafrika', 'mufungizi', 'josmwa@gmail.com', 'josmwa', 'congo', 'approved', false);
var user2 = new Users(2, 'mwafrika', 'mufungizi', 'josmwa@gmail.com', 'josmwa', 'congo', 'approved', false);
var user3 = new Users(3, 'mwafrika', 'mufungizi', 'josmwa@gmail.com', 'josmwa', 'congo', 'approved', false);
var users = [admin, user1, user2, user3]; // const users = new Users();
// export default users;
//  "clean": "rm -rf build && mkdir build"

exports.users = users;
//# sourceMappingURL=users1.js.map