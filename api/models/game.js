'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    gameID: DataTypes.STRING,
    nextCard: DataTypes.INTEGER,
    cardOrder: DataTypes.STRING
  }, {});
  Game.associate = function (models) {
    // associations can be defined here
    Game.hasMany(models.User)
    Game.hasOne(models.RuleSet)
  };
  return Game;
};