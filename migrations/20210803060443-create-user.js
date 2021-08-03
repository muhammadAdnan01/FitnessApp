'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      DOB: {
        type: Sequelize.DATE
      },
      stepsGoal: {
        type: Sequelize.INTEGER
      },
      heartPointsGoal: {
        type: Sequelize.STRING
      },
      sleepTime: {
        type: Sequelize.TIME
      },
      awakeTime: {
        type: Sequelize.TIME
      },
      gender: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};