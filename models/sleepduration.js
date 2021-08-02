'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SleepDuration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SleepDuration.init(
    {
      sleepTime: DataTypes.STRING,
      awakeTime: DataTypes.STRING,
      date: DataTypes.DATE,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'SleepDuration',
    }
  );
  return SleepDuration;
};
