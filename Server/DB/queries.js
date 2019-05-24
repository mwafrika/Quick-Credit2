import dotenv from 'dotenv';
import { Pool } from 'pg';
import { createTables } from '../src/usingDB/Db';

dotenv.config();
export const pool = Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('connected to the db');
});

export const createTabUs = () => {
  const createTables = `CREATE TABLE public.user1 (
    id serial primary key,
    email VARCHAR(50) unique NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    status VARCHAR(10),
    isAdmin boolean  
);
  CREATE TABLE public.loans(
    id serial primary key NOT NULL,
    email VARCHAR(50),
    createdOn DATE DEFAULT NOW(),
    status VARCHAR(50),
    repaid Boolean,
    tenor integer,
    amount float(20),
    paymentInstallment float(30),
    balance float,
    interest float
    );
   CREATE TABLE public.repayment(
      id serial primary key NOT NULL,
      createdOn Date NOT NULL,
      loanId integer NOT NULL,
      amount float NOT NULL
    );`;

};

export const Loans = values => ({
  text: 'INSERT INTO public.loans(user,createdOn,status,repaid,tenor,amount,paymentInstallment,balance,interest) values($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *;',
  values,
});
export const insertTab = values => ({
  text: 'INSERT INTO users(email,firstName,lastName,password,address,status,isAdmin) values($1,$2, $3, $4,$5,$6,$7) returning *;',
  values,
});
export const signIn = values => ({
  text: 'SELECT * FROM users WHERE email =$1 AND password = $2;',
  values,
});
export const repayM = values => ({
  text: 'INSERT INTO repayment(loanId,amount) values($1,$2) returning *;',
  values,
});
export const repayF = values => ({
  text: 'SELECT *FROM  repaymenty',
  values,
});
