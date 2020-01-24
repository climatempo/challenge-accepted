const { validationResult } = require('express-validator');
const DefaultError = require('../errors/defaultError');

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return next(DefaultError.badRequest(req, errors));
};
