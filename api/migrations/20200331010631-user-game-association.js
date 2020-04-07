'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        return queryInterface.addConstraint('GameUsers', ['GameId'], {
            type: 'foreign key',
            name: 'FK_Users_GameUsers_id',
            references: {
                table: 'Games',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        }).then(() => {
            return queryInterface.addConstraint('GameUsers', ['UserId'], {
                type: 'foreign key',
                name: 'FK_Games_GameUsers_id',
                references: {
                    table: 'Users',
                    field: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            })
        })
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
        return queryInterface.removeConstraint('GameUsers', 'FK_Games_GameUsers_id')
            .then(() => {
                return queryInterface.removeConstraint('GameUsers', 'FK_Users_GameUsers_id')
            })
    }
};
