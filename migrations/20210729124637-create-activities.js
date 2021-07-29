'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      steps: {
        type: Sequelize.INTEGER,
      },
      effortRate: {
        type: Sequelize.STRING,
      },
      heartPoints: {
        type: Sequelize.INTEGER,
      },
      startTime: {
        type: Sequelize.DATE,
      },
      endTime: {
        type: Sequelize.DATE,
      },
      distance: {
        type: Sequelize.STRING,
      },
      moveMinutes: {
        type: Sequelize.STRING,
      },
      calories: {
        type: Sequelize.STRING,
      },
      notes: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      userID: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Activities');
  },
};
