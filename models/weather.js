const data = require('../base/weather');

const weather = (localeId) => data.find(item => item.locale.id === localeId);

module.exports = weather;