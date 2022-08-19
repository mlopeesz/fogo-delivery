const product = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(6, 2),
    urlImage: DataTypes.STRING
},
  {
    timestamps: false,
    underscored: true,
  });

  return product;
};

module.exports = product;