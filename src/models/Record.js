const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Category = require('./Category');

const Record = sequelize.define(
  'record',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'idUser must be an integer',
        },
        isExistingUser: async function (value) {
          const user = await User.findByPk(value);
          if (!user) {
            throw new Error('User with the specified idUser does not exist');
          }
        },
      },
    },
    idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'idCategory must be an integer',
        },
        isExistingCategory: async function (value) {
          const category = await Category.findByPk(value);
          if (!category) {
            throw new Error(
              'Category with the specified idCategory does not exist'
            );
          }
        },
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate: {
        isDate: {
          msg: 'Invalid date format',
        },
      },
    },
    sumOfExpense: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: {
          msg: 'sumOfExpense must be a float',
        },
      },
    },
  },
  {
    tableName: 'record',
    timestamps: false,
  }
);

module.exports = Record;
