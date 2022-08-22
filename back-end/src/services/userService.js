const { user } = require('../database/models');

const findByEmail = async (email) => {
  const foundUser = await user.findOne({ where: { email } });
  return foundUser;
};

module.exports = { findByEmail };
