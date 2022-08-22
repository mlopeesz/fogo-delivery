const userService = require('../services/userService');
const generateToken = require('../auth/jwt');

const login = async (req, res) => {
  const user = await userService.findByEmail(req.body.email);
  const token = generateToken(user);
  const { name, email, role } = user;
  const response = { name, email, role, token };
  return res.status(200).json(response);
};

module.exports = login;
