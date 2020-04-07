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
        return queryInterface.bulkInsert('Games', [
            {
                name: "Game # 1",
                gameID: "ABCDEF",
                nextCard: 2,
                gameRuleSet: 2,
                cardOrder: "[A-D, K-D, 3-H, 2-S, 8-C]",
                numCards: 5,
                numUsers: 3,
                nextUser: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Game # 2",
                gameID: "ABCDEF",
                gameRuleSet: 1,
                nextCard: 2,
                cardOrder: "[A-D, K-D, 3-H, 2-S, 8-C]",
                numCards: 5,
                numUsers: 3,
                nextUser: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete('Games', null, {})
    }
};
