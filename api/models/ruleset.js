'use strict';
module.exports = (sequelize, DataTypes) => {
  const RuleSet = sequelize.define('RuleSet', {
    ruleSetName: DataTypes.STRING
  }, {});
  RuleSet.associate = function (models) {
    // associations can be defined here
  };
  return RuleSet;
};