'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Card.init({
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    moveCostOne: DataTypes.INTEGER,
    moveNameOne: DataTypes.STRING,
    moveCostOneNum: DataTypes.INTEGER,
    moveCostTwo: DataTypes.INTEGER,
    moveNameTwo: DataTypes.STRING,
    moveCostTwoNum: DataTypes.INTEGER,
    weaknessOne: DataTypes.STRING,
    weaknessTwo: DataTypes.STRING,
    weaknessThree: DataTypes.STRING,
    resistanceOne: DataTypes.STRING,
    resistanceTwo: DataTypes.STRING,
    resistanceThree: DataTypes.STRING,
    retreatCost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
    tableName: 'cards',
    timestamps: false
  });
  return Card;
};