const { query } = require('express-validator');

module.exports = {
  getWeatherRules: [
    query('city')
      .not()
      .isEmpty(),
  ],
};
