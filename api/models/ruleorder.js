'use strict';
module.exports = (sequelize, DataTypes) => {
  const RuleOrder = sequelize.define('RuleOrder', {
    ruleOrderInSet: DataTypes.INTEGER
  }, {});
  RuleOrder.associate = function (models) {
    // associations can be defined here
    RuleOrder.hasMany(models.Rule);
    RuleOrder.hasMany(models.RuleSet);
  };
  return RuleOrder;
};