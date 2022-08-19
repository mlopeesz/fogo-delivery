'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DECIMAL(6, 2),
      },
      url_image: {
        type: Sequelize.STRING,
        field: 'url_image',
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('products');
  }
};