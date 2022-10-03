const jwt = require('jsonwebtoken');
const fs = require('fs');
const userService = require("../services/userService")

const secret = fs.readFileSync('jwt.evaluation.key');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign({ data: payload }, secret, jwtConfig);
  return token;
};

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token não encontrado.' });

  try {
    const { data: { email } } = jwt.verify(token, secret);
    const user = await userService.findByEmail(email);
    if (!user) return res.status(401).json({ message: 'Erro ao validar token.' });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { generateToken, validateToken };
