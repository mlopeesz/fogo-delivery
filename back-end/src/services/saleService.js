const { sale, salesProduct, product } = require('../database/models');

const create = async (data) => {
  const response = await sale.create(data);
  return response;
};

const createSalesProduct = async (data) => {
  const createNewSaleProducts = await salesProduct.create(data);
  return createNewSaleProducts;
};

const getSaleByUserId = async (id) => {
  const sales = await sale.findAll({ where: { userId: id } });
  return sales;
};

const getOrderById = async (id) => {
  const sell = await sale.findOne({
    where: { id },
    include: [
      {
        model: product,
        as: "products",
        through: { attributes: ["quantity"] },
      },
    ],
  });
  return sell;
};

module.exports = { create, createSalesProduct, getSaleByUserId, getOrderById };
