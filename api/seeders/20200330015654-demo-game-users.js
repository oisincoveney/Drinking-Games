'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('GameUsers', [
            {
                GameId: 1,
                UserId: 1,
                UserOrder: 2,
                userConfirmed: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                GameId: 1,
                UserId: 2,
                UserOrder: 1,
                userConfirmed: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete('GameUsers', null, {})
    }
};
