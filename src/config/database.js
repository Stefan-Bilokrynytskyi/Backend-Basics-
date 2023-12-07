// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('backend', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
