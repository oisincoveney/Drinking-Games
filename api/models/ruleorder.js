'use strict';
module.exports = (sequelize, DataTypes) => {
  const RuleOrder = sequelize.define('RuleOrder', {
    order: DataTypes.INTEGER,
    RuleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Rule',
        key: 'id'
      }
    },
    RuleSetId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'RuleSet',
        key: 'id'
      }
    },
  }, {});
  RuleOrder.associate = function(models) {
    // associations can be defined here
  };
  return RuleOrder;
};
