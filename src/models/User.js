const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Username cannot be empty',
        },
        isString: (value) => {
          if (typeof value !== 'string') {
            throw new Error('Username must be a string');
          }
        },
      },
    },
  },
  {
    tableName: 'user',
    timestamps: false,
  }
);

module.exports = User;
