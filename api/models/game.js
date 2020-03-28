'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    gameID: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true
    },
    nextCard: DataTypes.INTEGER,
    cardOrder: DataTypes.STRING
  }, {});
  Game.associate = function (models) {
    // associations can be defined here
    Game.belongsToMany(models.User, {
      through: 'GameUser'
    })
  };
  return Game;
};
