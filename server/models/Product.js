'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    price: {
      type: DataTypes.INTEGER,
      get() {
        return this.getDataValue('price') / 100;
      },
    },
    expense: {
      type: DataTypes.INTEGER,
      get() {
        return this.getDataValue('expense') / 100;
      },
    },
  }, {
    toJSON: { getters: true },
    timestamps: false, // Disable timestamps
  });

  Product.associate = function(models) {
    Product.hasMany(models.Transaction, { as: 'transactions' });
  };

  return Product;
};
