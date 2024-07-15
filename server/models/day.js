'use strict';
module.exports = (sequelize, DataTypes) => {
  const Day = sequelize.define('Day', {
    date: DataTypes.STRING,
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
  }, {
    toJSON: { getters: true },
    timestamps: false, // Disable timestamps
  });
  return Day;
};
