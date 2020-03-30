'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rule = sequelize.define('Rule', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Rule.associate = function(models) {
    // associations can be defined here
    Rule.belongsToMany(models.RuleSet, {through: models.RuleOrder})
  };
  return Rule;
};