'use strict';
module.exports = (sequelize, DataTypes) => {
  const KPI = sequelize.define('KPI', {
    totalProfit: {
      type: DataTypes.INTEGER,
      get() {
        return this.getDataValue('totalProfit') / 100;
      },
    },
    totalRevenue: {
      type: DataTypes.INTEGER,
      get() {
        return this.getDataValue('totalRevenue') / 100;
      },
    },
    totalExpenses: {
      type: DataTypes.INTEGER,
      get() {
        return this.getDataValue('totalExpenses') / 100;
      },
    },
    expensesByCategory: {
      type: DataTypes.JSONB,
      get() {
        const expenses = this.getDataValue('expensesByCategory');
        for (const category in expenses) {
          expenses[category] = expenses[category] / 100;
        }
        return expenses;
      },
    },
  }, {
    toJSON: { getters: true },
    timestamps: false, // Disable timestamps
  });

  KPI.associate = function(models) {
    KPI.hasMany(models.Month, { as: 'monthlyData' });
    KPI.hasMany(models.Day, { as: 'dailyData' });
  };

  return KPI;
};
