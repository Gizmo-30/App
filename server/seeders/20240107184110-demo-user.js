'use strict';

const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [{
      username: 'John',
      email: 'example@example.com',
      password: await bcrypt.hash('123', 10),
      role: 'user',
      status: 'active',
      updatedAt: new Date(),
      createdAt: new Date(),
    },
      {
        username: 'Tim',
        email: 'example2@example2.com',
        password: await bcrypt.hash('123', 10),
        role: 'admin',
        status: 'active',
        updatedAt: new Date(),
        createdAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  }
};
