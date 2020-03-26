'use strict';
var models = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let p = models.sequelize.sync()

    await p.then(() => {
      queryInterface.bulkInsert('Users', [
        {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          wins: "420",
          losses: "0",
          gamesPlayed: "69",
          favoriteDrink: "Corona",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Dim",
          lastName: "Sum",
          email: "dimsum@gmail.com",
          wins: "0",
          losses: "420",
          gamesPlayed: "69",
          favoriteDrink: "Bud Light Lime",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
    })

    await p.then(() => {
      queryInterface.bulkInsert('Games', [
        {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          wins: "420",
          losses: "0",
          gamesPlayed: "69",
          favoriteDrink: "Corona",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Dim",
          lastName: "Sum",
          email: "dimsum@gmail.com",
          wins: "0",
          losses: "420",
          gamesPlayed: "69",
          favoriteDrink: "Bud Light Lime",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
    })

    await p.then(() => {
      queryInterface.bulkInsert('Games', [
        {
          gameID: "abc1234",
          nextCard: 2,
          cardOrder: "[A-D, A-S, A-H, A-C]",
          createdAt: new Date(),
          updatedAt: new Date(),
          RuleSetId: 1,
        },
        {
          gameID: "def6789",
          nextCard: 5,
          cardOrder: "[A-D, A-S, A-H, A-C]",
          createdAt: new Date(),
          updatedAt: new Date(),
          RuleSetId: 1,
        },
      ])
    })
    await p.then(() => {
      queryInterface.bulkInsert('GameUser', [
        {
          GameId: 1,
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          GameId: 1,
          UserId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ])
    })
    return p
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('GameUser', null, {}).then(() => {
      return Promise.all([
        queryInterface.bulkDelete('Users', null, {}),
        queryInterface.bulkDelete('Games', null, {}),
      ])
    })
  }
};
