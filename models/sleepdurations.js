'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SleepDurations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SleepDurations.init(
    {
      sleepTime: DataTypes.TIME,
      awakeTime: DataTypes.TIME,
      date: DataTypes.DATE,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'SleepDurations',
    }
  );
  return SleepDurations;
};
