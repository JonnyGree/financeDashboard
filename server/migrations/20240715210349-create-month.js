'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Months', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      month: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      revenue: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      expenses: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      operationalExpenses: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nonOperationalExpenses: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Months');
  },
};
