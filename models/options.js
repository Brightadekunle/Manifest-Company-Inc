const sequelize = require('sequelize')
const db = require('../configuration/database')


module.exports = (sequelize, DataTypes) => {
    const Options = db.define('Options', {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        option_name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })

    Options.associate = function(models) {
        Options.belongsToMany(models.Product, {foreignKey: 'option_id'})
      };
      return Options;
}