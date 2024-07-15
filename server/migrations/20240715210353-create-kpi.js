'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('KPIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      totalProfit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalRevenue: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalExpenses: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      expensesByCategory: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('KPIs');
  },
};
