'use strict';

const fs = require('fs');
const SQLTrigger = fs
  .readFileSync(
    require('path').resolve(__dirname, './Triggers/Activty_trigger.sql')
  )
  .toString();

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
      date: {
        type: Sequelize.DATE,
      },
      steps: {
        type: Sequelize.INTEGER,
      },
      startTime: {
        type: Sequelize.TIME,
      },
      endTime: {
        type: Sequelize.TIME,
      },
      distance: {
        type: Sequelize.STRING,
      },
      moveMinutes: {
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
      burnRate: {
        type: Sequelize.STRING,
      },
      heartPoints: {
        type: Sequelize.STRING,
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
    queryInterface.sequelize.query(SQLTrigger);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Activities');
  },
};
