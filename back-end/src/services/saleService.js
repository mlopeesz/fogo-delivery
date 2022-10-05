const { sale, salesProduct } = require('../database/models');

const create = async (data) => {
  const response = await sale.create(data);
  return response;
};

const createSalesProduct = async (data) => {
  const createNewSaleProducts = await salesProduct.create(data);
  return createNewSaleProducts;
};

module.exports = { create, createSalesProduct };
