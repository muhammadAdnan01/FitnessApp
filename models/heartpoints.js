'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeartPoints extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HeartPoints.init({
    points: DataTypes.STRING,
    activity_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HeartPoints',
  });
  return HeartPoints;
};