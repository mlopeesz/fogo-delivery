const userService = require('../services/userService');
const md5 = require('md5');

const checkIfUserExists = async (req, res, next) => {
  const { email } = req.body;
  const user = await userService.findByEmail(email);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado.' });
  next();
};

const checkUserPassword = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userService.findByEmail(email);
  const encryptedPassword = md5(password);
  
  if (user.password !== encryptedPassword) {
    return res.status(403).json({ message: 'Senha incorreta.' });
  };

  next();
};

module.exports = { checkIfUserExists, checkUserPassword };
