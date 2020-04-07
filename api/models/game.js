'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    gameID: DataTypes.STRING,
    nextCard: DataTypes.INTEGER,
    cardOrder: DataTypes.STRING,
    gameRuleSet: {
      type: DataTypes.INTEGER,
      references: {
        model: 'RuleSet',
        key: 'id'
      }
    },
    numCards: DataTypes.INTEGER,
    numUsers: DataTypes.INTEGER,
    nextUser: DataTypes.INTEGER
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
    Game.belongsToMany(models.User, {through: models.GameUser})
  };
  return Game;
};
