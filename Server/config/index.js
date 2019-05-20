/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */

import express from 'express';
import bodyParser from 'body-parser';
import router from '../routes/route';

const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
const port = 15000;
const server = app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});

export function closeServer() {
  server.close();
}
module.exports = {
  app,
  closeServer,
};
// export default app;
