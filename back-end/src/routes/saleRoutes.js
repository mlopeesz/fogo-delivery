const Router = require('express');
const { validateToken } = require('../auth/jwt');
const { create, createSalesProduct } = require('../controllers/saleController');

const route = Router();

route.post('/sale', validateToken, create);
route.post('/salesproduct', createSalesProduct);

module.exports = route;