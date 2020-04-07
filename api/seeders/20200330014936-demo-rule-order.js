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

        return queryInterface.bulkInsert('RuleOrders', [
            {
                order: 1,
                RuleId: 2,
                RuleSetId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                order: 2,
                RuleId: 1,
                RuleSetId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ])
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete('RuleOrders', null, {})
    }
};
