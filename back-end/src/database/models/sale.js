const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", {
    totalPrice: DataTypes.DECIMAL(6, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  },
  {
    timestamps: false,
    underscored: true,
  });

  sale.associate = (models) => {
    sale.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
    sale.belongsTo(models.user, { foreignKey: 'sellerId', as: 'seller' });
  };

  return sale;
};

module.exports = sale;