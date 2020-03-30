'use strict';
module.exports = (sequelize, DataTypes) => {
  const RuleOrder = sequelize.define('RuleOrder', {
    order: DataTypes.INTEGER
  }, {});
  RuleOrder.associate = function(models) {
    // associations can be defined here
  };
  return RuleOrder;
};