"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeServer = closeServer;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _route = _interopRequireDefault(require("../routes/route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable linebreak-style */

/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable linebreak-style */

/* eslint-disable linebreak-style */

/* eslint-disable linebreak-style */
var app = (0, _express["default"])(); // Parse incoming requests data

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use('/', _route["default"]);
var port = 15000;
var server = app.listen(port, function () {
  console.log("listening to the port ".concat(port));
});

function closeServer() {
  server.close();
}

module.exports = {
  app: app,
  closeServer: closeServer
}; // export default app;
//# sourceMappingURL=index.js.map