const saleService = require('../services/saleService');

const create = async (req, res) => {
  const response = await saleService.create(req.body);
  return res.status(201).json(response);
};

const createSalesProduct = async (req, res) => {
  await SalesProductsService.createSaleProducts(req.body);
  return res.status(201).end();
}

module.exports = { create, createSalesProduct };
