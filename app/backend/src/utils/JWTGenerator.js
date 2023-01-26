require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const JWTGenerator = () => {
  const token = jwt.sign({ message: 'Valid request' }, JWT_SECRET, {
    expiresIn: '30d',
  });
  return token;
};

module.exports = JWTGenerator;
