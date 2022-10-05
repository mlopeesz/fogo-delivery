const userService = require('../services/userService');
const { generateToken } = require('../auth/jwt');

const login = async (req, res) => {
  const user = await userService.findByEmail(req.body.email);
  const token = generateToken(user);
  const { name, email, role } = user;
  const response = { name, email, role, token };
  return res.status(200).json(response);
};

const create = async (req, res) => {
  const user = await userService.create(req.body);
  const token = generateToken(user);
  const { name, email, role } = user;
  const response = { name, email, role, token };
  return res.status(201).json(response);
};

const getAllSellers = async (_req, res) => {
  const sellers = await userService.getAllSellers();
  return res.status(200).json(sellers);
};

const getUserId = async (req, res) => {
  const user = await userService.findByEmail(req.body.email);
  return res.status(200).json(user.id);
};

module.exports = { login, create, getAllSellers, getUserId };
