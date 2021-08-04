'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class weight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  weight.init(
    {
      value: DataTypes.STRING,
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'weight',
    }
  );
  return weight;
};
