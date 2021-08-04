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
      date: DataTypes.DATE,
      steps: DataTypes.INTEGER,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
      distance: DataTypes.STRING,
      moveMinutes: DataTypes.STRING,
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
