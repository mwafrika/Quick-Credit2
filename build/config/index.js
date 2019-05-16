"use strict";

var _route = _interopRequireDefault(require("../routes/route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable linebreak-style */
var express = require('express');

var bodyParser = require('body-parser');

var app = express(); // Parse incoming requests data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/', _route["default"]);
var port = 6000;
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