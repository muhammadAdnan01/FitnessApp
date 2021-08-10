'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ActivityCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  ActivityCategory.init(
    {
      type: DataTypes.STRING,
      activity_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Activity_Category',
    }
  );
  return ActivityCategory;
};
