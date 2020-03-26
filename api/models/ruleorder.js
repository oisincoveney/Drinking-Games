'use strict';
module.exports = (sequelize, DataTypes) => {
  const RuleOrder = sequelize.define('RuleOrder', {
    ruleOrderInSet: DataTypes.INTEGER
  }, {});
  RuleOrder.associate = function (models) {
    // associations can be defined here
  };
  return RuleOrder;
};