'use strict';
let Game = require('./game');
let User = require('./user');
module.exports = (sequelize, DataTypes) => {
  const GameUser = sequelize.define('GameUser', {
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: Game,
        key: 'id'
      }
    },
    GameId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    userConfirmed: {
      type: DataTypes.BOOLEAN,
    },
    UserOrder: {
      type: DataTypes.INTEGER,
    }
  }, {});
  GameUser.associate = function(models) {
    // associations can be defined here
  };
  return GameUser;
};
