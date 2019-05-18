/* eslint-disable consistent-return */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable linebreak-style */
import jwt from 'jsonwebtoken';

export let auth;

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'josmwafrika789');
    req.userData = decoded;
    auth = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      status: 401,
      error: 'Authentication failed, please check your credentials',
    });
  }
};
