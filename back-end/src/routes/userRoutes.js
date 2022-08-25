const Router = require('express');
const {
  checkIfUserExists,
  checkUserPassword,
  checkIfUserExistsRegister,
} = require('../middlewares/validations');
const { login, create } = require('../controllers/userController');

const route = Router();

route.post('/login', checkIfUserExists, checkUserPassword, login);
route.post('/register', checkIfUserExistsRegister, create);

module.exports = route;
