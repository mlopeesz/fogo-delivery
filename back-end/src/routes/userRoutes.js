const Router = require('express');
const checkIfUserExists = require('../middlewares/validations');

const route = Router();

route.post('/login', checkIfUserExists);

module.exports = route;
