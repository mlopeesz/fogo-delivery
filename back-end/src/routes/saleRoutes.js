const Router = require('express');
const { validateToken } = require('../auth/jwt');
const { create, createSalesProduct, getSaleByUserId } = require('../controllers/saleController');

const route = Router();

route.post('/sale', validateToken, create);
route.post('/salesproduct', createSalesProduct);
route.post('/customer/orders', getSaleByUserId);

module.exports = route;