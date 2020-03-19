/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Rule', {
        index: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        rule: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });
};
