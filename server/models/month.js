'use strict';
module.exports = (sequelize, DataTypes) => {
  const Month = sequelize.define('Month', {
    month: DataTypes.STRING,
    revenue: {
      type: DataTypes.INTEGER,
      get() {
        return this.getDataValue('revenue') / 100;
      },
    },
    expenses: {
      type: DataTypes.INTEGER,
      get() {
        return this.getDataValue('expenses') / 100;
      },
    },
    operationalExpenses: {
      type: DataTypes.INTEGER,
      get() {
        return this.getDataValue('operationalExpenses') / 100;
      },
    },
    nonOperationalExpenses: {
      type: DataTypes.INTEGER,
      get() {
        return this.getDataValue('nonOperationalExpenses') / 100;
      },
    },
  }, {
    toJSON: { getters: true },
    timestamps: false, // Disable timestamps
  });
  return Month;
};
