const { sale, salesProduct } = require('../database/models');

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

module.exports = { create, createSalesProduct, getSaleByUserId };
