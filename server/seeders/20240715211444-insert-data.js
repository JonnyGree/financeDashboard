'use strict';
const { kpis, products, transactions } = require('../data/data.js');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert KPI data
    await queryInterface.bulkInsert('KPIs', kpis.map(kpi => ({
      totalProfit: kpi.totalProfit,
      totalRevenue: kpi.totalRevenue,
      totalExpenses: kpi.totalExpenses,
      expensesByCategory: JSON.stringify(Object.fromEntries(kpi.expensesByCategory)),
      monthlyData: JSON.stringify(kpi.monthlyData),
      dailyData: JSON.stringify(kpi.dailyData),
    })), {});

    // Insert Product data
    const productRecords = await queryInterface.bulkInsert(
      'Products',
      products.map(product => ({
        price: product.price,
        expense: product.expense,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      { returning: true }
    );

    // Insert Transaction data
    const transactionRecords = await queryInterface.bulkInsert(
      'Transactions',
      transactions.map(transaction => ({
        buyer: transaction.buyer,
        amount: transaction.amount,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      { returning: true }
    );

    // Create product-transaction associations
    const productTransactionRecords = [];
    transactions.forEach((transaction, index) => {
      transaction.productIds.forEach(productId => {
        const product = productRecords.find(prod => prod.id === productId);
        if (product) {
          productTransactionRecords.push({
            productId: product.id,
            transactionId: transactionRecords[index].id,
          });
        }
      });
    });

    await queryInterface.bulkInsert('ProductTransactions', productTransactionRecords);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductTransactions', null, {});
    await queryInterface.bulkDelete('Transactions', null, {});
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('KPIs', null, {});
  },
};
