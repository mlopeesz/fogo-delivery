const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("salesProduct", {
    quantity: DataTypes.INTEGER
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales_products',
  });

  salesProduct.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: salesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: salesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return salesProduct;
};

module.exports = salesProduct;