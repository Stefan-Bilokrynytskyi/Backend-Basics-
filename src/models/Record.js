// models/Record.js
// models/Record.js
// models/Record.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
    },
    idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Устанавливаем значение по умолчанию как текущую дату и время
    },
    sumOfExpense: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'record',
    timestamps: false,
  }
);

module.exports = Record;
