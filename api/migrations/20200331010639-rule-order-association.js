'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        return Promise.all([
            queryInterface.addConstraint('RuleOrders', ['RuleId'], {
                type: 'foreign key',
                name: 'FK_Rules_RuleOrder_id',
                references: {
                    table: 'Rules',
                    field: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            }),
            queryInterface.addConstraint('RuleOrders', ['RuleSetId'], {
                type: 'foreign key',
                name: 'FK_RuleSet_RuleOrder_id',
                references: {
                    table: 'RuleSets',
                    field: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            }),
        ])
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
        return Promise.all([
            queryInterface.removeConstraint('GameUsers', 'FK_Games_GameUsers_id'),
            queryInterface.removeConstraint('GameUsers', 'FK_Users_GameUsers_id')
        ])
    }
};
