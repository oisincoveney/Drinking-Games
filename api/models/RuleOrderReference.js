/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('RuleOrderReference', {
        Order: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rulesetid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'RuleSetNames',
                key: 'index'
            }
        },
        ruleid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Rules',
                key: 'index'
            }
        }
    });
};
