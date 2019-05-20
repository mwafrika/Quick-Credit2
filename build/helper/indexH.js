"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replacer = void 0;

/* eslint-disable linebreak-style */

/* eslint-disable import/prefer-default-export */

/* eslint-disable linebreak-style */
var replacer = function replacer(key, value) {
  if (key === 'password') return undefined;
  if (key === 'id') return undefined;
  return value;
};

exports.replacer = replacer;
//# sourceMappingURL=indexH.js.map