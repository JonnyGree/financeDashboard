'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    buyer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      get() {
        return this.getDataValue('amount') / 100;
      },
    },
  }, {
    toJSON: { getters: true },
    timestamps: false, // Disable timestamps
  });

  Transaction.associate = function(models) {
    Transaction.belongsToMany(models.Product, {
      through: 'ProductTransactions',
      as: 'products',
      foreignKey: 'transactionId',
    });
  };

  return Transaction;
};
