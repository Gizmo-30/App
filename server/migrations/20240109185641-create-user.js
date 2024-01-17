'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("User", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      role: {
        type: Sequelize.ENUM("admin", "user"),
        allowNull: false,
        defaultValue: "user",
      },
      status: {
        type: Sequelize.ENUM("block", "active"),
        allowNull: false,
        defaultValue: "active"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.addConstraint('User', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'fk_user_collections',
      references: {
        table: 'Collections',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'cascade',
    });
  },




  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('User');
  }
};
