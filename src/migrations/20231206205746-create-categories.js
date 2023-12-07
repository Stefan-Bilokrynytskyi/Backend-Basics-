// migrations/YYYYMMDDHHmmss-create-category.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'category',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        categoryName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        idUser: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'user',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
      },
      {
        timestamps: false, // Отключение автоматических временных меток
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('category');
  },
};
