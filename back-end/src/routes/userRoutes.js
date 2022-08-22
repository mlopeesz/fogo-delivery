const Router = require('express');
const { checkIfUserExists, checkUserPassword } = require('../middlewares/validations');
const login = require('../controllers/userController');

const route = Router();

route.post('/login', checkIfUserExists, checkUserPassword, login);

module.exports = route;
