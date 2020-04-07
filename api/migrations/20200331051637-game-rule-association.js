'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        return queryInterface.addConstraint('Games', ['gameRuleSet'], {
            type: "foreign key",
            name: "FK_RuleSet_Games_id",
            references: {
                table: 'RuleSets',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
        return queryInterface.removeConstraint('Games', 'FK_RuleSet_Games_id').then(() => {
            return queryInterface.removeColumn('Games', 'gameRuleSet');
        })
    }
};
