'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Activities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Activities.init(
    {
      title: DataTypes.STRING,
      type: DataTypes.STRING,
      date: DataTypes.DATE,
      steps: DataTypes.INTEGER,
      effortRate: DataTypes.STRING,
      heartPoints: DataTypes.INTEGER,
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
      distance: DataTypes.STRING,
      moveMinutes: DataTypes.STRING,
      calories: DataTypes.STRING,
      notes: DataTypes.STRING,
      location: DataTypes.STRING,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Activities',
    }
  );
  return Activities;
};
