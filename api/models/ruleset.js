'use strict';
module.exports = (sequelize, DataTypes) => {
  const RuleSet = sequelize.define('RuleSet', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  RuleSet.associate = function(models) {
    // associations can be defined here
    RuleSet.belongsToMany(models.Rule, {through: models.RuleOrder})
  };
  return RuleSet;
};