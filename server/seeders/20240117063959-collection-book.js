'use strict';

const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Collections', [{
      name: "book collection",
      description: "its book collections",
      type: "book",
      UserId: 1,
      updatedAt: new Date(),
      createdAt: new Date(),
    },
      {
        name: "movie collection",
        description: "its book movies",
        type: "movie",
        UserId: 2,
        updatedAt: new Date(),
        createdAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Collections', null, {});
  }
};
