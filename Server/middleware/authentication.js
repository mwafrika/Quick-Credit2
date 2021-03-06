import jwt from 'jsonwebtoken';

export let auth;

export default (req, res, next) => {
  try {
    const token = req.headers.authorization;
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

