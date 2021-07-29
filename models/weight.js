'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Weight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Weight.init(
    {
      value: DataTypes.STRING,
      date: DataTypes.DATE,
      time: DataTypes.DATE,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Weight',
    }
  );
  return Weight;
};
