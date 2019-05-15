/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('../routes/routes');

const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', userRouter);
const port = 6000;
const server = app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});

function closeServer() {
  server.close();
}
module.exports = {
  app,
  closeServer,
};
