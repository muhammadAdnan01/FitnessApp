'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // queryInterface.bulkInsert('HeartRates', [
    //   {
    //     Systolic: 10.1,
    //     diastolic: 20.3,
    //     date: new Date(),
    //     time: new Date(),
    //     userID: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ])
  },

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('HeartRates', null, {}),
};
