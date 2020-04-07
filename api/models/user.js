'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        favoriteDrink: DataTypes.STRING
    }, {});
    User.associate = function (models) {
        // associations can be defined here
        User.belongsToMany(models.Game, {through: models.GameUser})
    };
    return User;
};
