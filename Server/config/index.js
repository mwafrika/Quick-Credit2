/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
import router from '../routes/route';

const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
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
// export default app;