const userService = require('../services/userService');

const checkIfUserExists = async (req, res) => {
  const { email } = req.body;
  const user = await userService.findByEmail(email);
  if (user) return res.status(200).json(user);
  return res.status(404).json({ message: 'Usuário não encontrado.' });
};

module.exports = checkIfUserExists;
