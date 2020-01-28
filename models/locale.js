const data = require('../base/locales');

const locale = (city) => data.find(item => item.name === city);

module.exports = locale;