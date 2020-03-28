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
        gameID: "ABC123",
        nextCard: 3,
        cardOrder: "[A-D, A-J, A-C, A-S, K-S, K-3]",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameID: "DEF456",
        nextCard: 5,
        cardOrder: "[A-D, A-J, A-C, A-S, K-S, K-3]",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameID: "GHI789",
        nextCard: 1,
        cardOrder: "[A-D, A-J, A-C, A-S, K-S, K-3]",
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
    return queryInterface.bulkDelete('Games', null, {});
  }
};
