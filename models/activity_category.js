'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Activity_Category.init(
    {
      type: DataTypes.STRING,
      activity_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Activity_Category',
    }
  );
  return Activity_Category;
};
