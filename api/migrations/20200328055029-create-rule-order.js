'use strict';
// let models = require('../models/index');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RuleOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order: {
        type: Sequelize.INTEGER
      },
      RuleId: {
        type: Sequelize.INTEGER,
      },
      RuleSetId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RuleOrders');
  }
};
