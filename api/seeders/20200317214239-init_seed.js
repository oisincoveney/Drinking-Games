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

        let p = models.sequelize.sync({ force: true });

        await p.then(() =>
            queryInterface.bulkInsert('Rules', [
                {
                    ruleName: "Rule #1",
                    description: "This is a rule",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    ruleName: "Rule #2",
                    description: "This is also a rule",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ])
        );
        // await queryInterface.bulkInsert('Rule', [
        //   {
        //     ruleName: "Rule #1",
        //     description: "This is a rule",
        //   },
        //   {
        //     ruleName: "Rule #2",
        //     description: "This is also a rule",
        //   }
        // ]);
        await p.then(() => queryInterface.bulkInsert('RuleSets', [
            {
                ruleSetName: "Oisin's Rules",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                ruleSetName: "Not Oisin's Rules",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]));

        await p.then(queryInterface.bulkInsert('RuleOrderReferences', [
            {
                Order: 1,
                rulesetid: 1,
                ruleid: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Order: 2,
                rulesetid: 1,
                ruleid: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]));
        return p;
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        return Promise.all([
            queryInterface.bulkDelete('Rules', null, {}),
            queryInterface.bulkDelete('ruleSetNames', null, {}),
            queryInterface.bulkDelete('RuleOrderReferences', null, {})
        ])
    }
};
