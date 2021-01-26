const sequelize = require('sequelize')
const db = require('../configuration/database')

module.exports = (sequelize, DataTypes) => {
    const Category = db.define('Category', {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(35),
            allowNull: false,
            unique: true,
        }, 
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        thumbnail: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        }
    })

    Category.associate = (models) => {
        Category.belongsToMany(models.Product, { through: "ProductCategory", foreignKey: "category_id" })
    }

    return Category
}