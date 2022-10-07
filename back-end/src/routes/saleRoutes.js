const Router = require('express');
const { validateToken } = require('../auth/jwt');
const { create, createSalesProduct, getSaleByUserId, getOrderById, getOrdersBySellerId } = require('../controllers/saleController');

const route = Router();

route.post('/sale', validateToken, create);
route.post('/salesproduct', createSalesProduct);
route.post('/customer/orders', getSaleByUserId);
route.get('/salesproduct/:id', getOrderById);
route.post('/seller/orders', getOrdersBySellerId);

module.exports = route;