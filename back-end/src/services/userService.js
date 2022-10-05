const md5 = require('md5');
const { user } = require('../database/models');

const findByEmail = async (email) => {
  const foundUser = await user.findOne({ where: { email } });
  return foundUser;
};

const create = async (data) => {
  const encryptedData = {
    name: data.name,
    email: data.email,
    password: md5(data.password),
  };
  const newUser = await user.create(encryptedData);
  return newUser;
};

const getAllSellers = async () => {
  const sellers = await user.findAll({ where: { role: 'seller' }, attributes: { exclude: ['password'] } });
  return sellers;
};

module.exports = { findByEmail, create, getAllSellers };
