const Router = require('express');
const {
  checkIfUserExists,
  checkUserPassword,
  checkIfUserExistsRegister,
} = require('../middlewares/validations');
const { login, create, getAllSellers } = require('../controllers/userController');

const route = Router();

route.post('/login', checkIfUserExists, checkUserPassword, login);
route.post('/register', checkIfUserExistsRegister, create);
route.get('/sellers', getAllSellers);

module.exports = route;
