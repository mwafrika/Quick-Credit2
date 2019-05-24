import express from 'express';
import bodyParser from 'body-parser';
import { Pool } from 'pg';
import router from '../routes/route';
import { repay } from '../models/Repayment1';

export const connectionString = 'postgresql://user1:123@localhost:5432/Quick_credit2';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
const port = process.env.PORT || 15000;
export const pool = new Pool({
  connectionString,
});
const server = app.listen(port, () => {
  console.log(`listening to the port ${port}`);
 // createTabUs();
});

export const createTabUs = () => {
  const createTables = `DROP TABLE IF EXISTS users;
  CREATE TABLE public.users (
    id serial primary key,
    email VARCHAR(50) unique NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    status VARCHAR(10),
    isAdmin boolean  
);
DROP TABLE IF EXISTS loans;
  CREATE TABLE public.loans(
    id serial primary key NOT NULL,
    email VARCHAR(50),
    createdOn DATE,
    status VARCHAR(50),
    repaid Boolean,
    tenor integer,
    amount float(20),
    paymentInstallment float(30),
    balance float,
    interest float
    );
    DROP TABLE IF EXISTS repayment;
   CREATE TABLE public.repayment(
      id serial primary key NOT NULL,
      createdOn Date default NOW(),
      loanId integer NOT NULL,
      amount float NOT NULL
    );`;
    
    pool.query(createTables, [], (err, resl) => {
      if(err) throw err;
      console.log('Tables created');
    })
}

export function closeServer() {
  server.close();
}
module.exports = {
  app,
  closeServer,
};
