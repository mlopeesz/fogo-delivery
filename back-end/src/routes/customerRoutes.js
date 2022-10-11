const Router = require('express');
const { getAll } = require('../controllers/productController');

const route = Router();

route.get('/customer/products', getAll);

module.exports = route;
