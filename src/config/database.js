require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.Database,
  process.env.Username,
  process.env.Password,
  {
    host: process.env.Hostname,
    dialect: 'postgres',
    port: Number(process.env.Port),

    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;
