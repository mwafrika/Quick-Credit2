/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import router from '../routes/route';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
const port = 15000;
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
// export default app;
