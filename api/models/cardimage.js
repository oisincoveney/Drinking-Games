'use strict';
module.exports = (sequelize, DataTypes) => {
  const CardImage = sequelize.define('CardImage', {
    suit: DataTypes.STRING,
    number: DataTypes.INTEGER,
    image: DataTypes.BLOB
  }, {});
  CardImage.associate = function(models) {
    // associations can be defined here
  };
  return CardImage;
};