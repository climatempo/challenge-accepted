const { Sequelize } = require('sequelize');

const _DATABASE = process.env._DATABASE;
const _USER = process.env._USER;
const _PASSWORD = process.env._PASSWORD;
const _HOST = process.env._HOST;

module.exports = new Sequelize(_DATABASE, _USER, _PASSWORD, {
  host: _HOST,
  dialect: 'mysql',
  pool: {
    max: 10,
  },
  port: 3306,
});
