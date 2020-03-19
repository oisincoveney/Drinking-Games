/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('RuleSetName', {
        index: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        rulesetname: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
};
