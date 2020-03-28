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
        return queryInterface.bulkInsert('Users', [{
            firstName: "Tits",
            lastName: "McGee",
            email: "titsmcgee@gmail.com",
            wins: 351,
            losses: 69,
            gamesPlayed: 420,
            favoriteDrink: "Smirnoff Ice",
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            firstName: "Ron",
            lastName: "Burgundy",
            email: "ronburgundy@gmail.com",
            wins: 69,
            losses: 351,
            gamesPlayed: 420,
            favoriteDrink: "Milk",
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
      return queryInterface.bulkDelete('Users', null, {});
    }
};
