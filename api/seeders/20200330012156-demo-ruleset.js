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
    return queryInterface.bulkInsert('RuleSets', [
      {
        name: "Rule set numero uno",
        description: "This is a set of rules",
        createdAt: new Date,
        updatedAt: new Date()
      },
      {
        name: "Rule set numero dos",
        description: "This is a set of rules",
        createdAt: new Date,
        updatedAt: new Date()
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
    return queryInterface.bulkDelete('RuleSets', null, {})
  }
};
