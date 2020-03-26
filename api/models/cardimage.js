'use strict';
module.exports = (sequelize, DataTypes) => {
  const CardImage = sequelize.define('CardImage', {
    cardImage: DataTypes.BLOB
  }, {});
  CardImage.associate = function(models) {
    // associations can be defined here
  };
  return CardImage;
};