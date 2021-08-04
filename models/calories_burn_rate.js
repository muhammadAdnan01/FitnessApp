'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calories_Burn_Rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Calories_Burn_Rate.init(
    {
      burnRate: DataTypes.STRING,
      activity_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Calories_Burn_Rate',
    }
  );
  return Calories_Burn_Rate;
};
