"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validator =
/*#__PURE__*/
function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }

  _createClass(Validator, null, [{
    key: "schemaSignUp",
    value: function schemaSignUp(user) {
      var userSchema = {
        name: _joi["default"].string().required(),
        email: _joi["default"].string().email().required(),
        password: _joi["default"].string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(),
        confirmPassword: _joi["default"].string().valid(_joi["default"].ref('password')).required().strict()
      };
      return _joi["default"].validate(user, userSchema);
    }
  }, {
    key: "schemaSignIn",
    value: function schemaSignIn(user) {
      var userSchema = {
        email: _joi["default"].string().email().required(),
        password: _joi["default"].string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required()
      };
      return _joi["default"].validate(user, userSchema);
    }
  }, {
    key: "schemaParamsId",
    value: function schemaParamsId(params) {
      var idSchema = {
        id: _joi["default"].number().min(1)
      };
      return _joi["default"].validate(params, idSchema);
    } //   static schemaMessage(message) {
    //     const schema = {
    //       subject: Joi.string().default('no-subject'),
    //     //   message: Joi.string().required(),
    //     //   to: Joi.string().email().required(),
    //     //   parentMessageId: Joi.number(),
    //     };
    //     return Joi.validate(message, schema);
    //   }

  }]);

  return Validator;
}();

exports["default"] = Validator;
//# sourceMappingURL=validate.js.map