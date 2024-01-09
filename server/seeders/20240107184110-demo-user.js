'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [{
      username: 'John',
      email: 'example@example.com',
      password: '123',
      role: 'user',
      status: 'active',
      updatedAt: new Date(),
      createdAt: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  }
};
