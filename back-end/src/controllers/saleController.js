const saleService = require('../services/saleService');

const create = async (req, res) => {
  const response = await saleService.create(req.body);
  return res.status(201).json(response);
};

const createSalesProduct = async (req, res) => {
  await saleService.createSalesProduct(req.body);
  return res.status(201).end();
};

const getSaleByUserId = async (req, res) => {
  const sales = await saleService.getSaleByUserId(req.body.userId);
  return res.status(200).json(sales);
};

const getOrdersBySellerId = async (req, res) => {
  const sales = await saleService.getOrdersBySellerId(req.body.sellerId);
  return res.status(200).json(sales);
};

const getOrderById = async (req, res, _next) => {
  const { id } = req.params;
  const order = await saleService.getOrderById(id);
  return res.status(200).json(order);
};

module.exports = { create, createSalesProduct, getSaleByUserId, getOrderById, getOrdersBySellerId };
