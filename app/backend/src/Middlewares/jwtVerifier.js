const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const statusCodes = require('../statusCodes');

const jwtVerifier = async ({ headers }, res, next) => {
  const { authorization } = headers;

  try {
    jwt.verify(authorization, JWT_SECRET)
    next();
  } catch (err) {
    res.status(statusCodes.UNAUTHORIZED).json({ message: 'Unauthorized request, you need a valid token' });
  }

  // if the key exists and it's equal to the .env jwt_secret one, it go to the next middleware
};

module.exports = jwtVerifier;
