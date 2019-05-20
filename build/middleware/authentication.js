"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.auth = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable linebreak-style */

/* eslint-disable consistent-return */

/* eslint-disable import/no-mutable-exports */

/* eslint-disable linebreak-style */
var auth;
exports.auth = auth;

var _default = function _default(req, res, next) {
  try {
    var token = req.headers.authorization.split(' ')[1];

    var decoded = _jsonwebtoken["default"].verify(token, 'josmwafrika789');

    req.userData = decoded;
    exports.auth = auth = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      status: 401,
      error: 'Authentication failed, please check your credentials'
    });
  }
};

exports["default"] = _default;
//# sourceMappingURL=authentication.js.map