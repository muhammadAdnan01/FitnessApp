'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      weight: DataTypes.STRING,
      height: DataTypes.STRING,
      DOB: DataTypes.DATE,
      stepsGoal: DataTypes.INTEGER,
      heartPointsGoal: DataTypes.STRING,
      sleepTime: DataTypes.TIME,
      awakeTime: DataTypes.TIME,
      gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user',
    }
  );
  user.associate = (models) => {
    console.log('models', models);
    user.hasMany(models.weight, {
      foreignKey: {
        name: 'userID',
        allowNull: false,
      },
      as: 'weights',
    });
  };
  return user;
};
