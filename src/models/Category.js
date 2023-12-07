const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Category = sequelize.define(
  'category',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'CategoryName cannot be empty',
        },
        isString(value) {
          if (typeof value !== 'string') {
            throw new Error('CategoryName must be a string');
          }
        },
      },
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      validate: {
        isExistingUser: async function (value) {
          if (value !== undefined) {
            const user = await User.findByPk(value);
            if (!user) {
              throw new Error('User with the specified idUser does not exist');
            }
          }
        },
      },
    },
  },
  {
    tableName: 'category',
    timestamps: false,
  }
);

module.exports = Category;
