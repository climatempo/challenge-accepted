const { Sequelize } = require('sequelize');

const _DATABASE = 'dbClimatempo';
const _USER = 'root';
const _PASSWORD = 'Hfi@akGHl*jU';
const _HOST = '35.199.81.230';

module.exports = new Sequelize(_DATABASE, _USER, _PASSWORD, {
  host: _HOST,
  dialect: 'mysql',
  pool: {
    max: 10,
  },
  port: 3306,
});
