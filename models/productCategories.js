const sequelize = require('sequelize')
const db = require('../configuration/database')

module.exports = (sequelize, DataTypes) => {
    const ProductCategory = db.define('ProductCategory', {
        category_id: {
            type: Sequelize.INTEGER,
        },
        product_id: {
            type: Sequelize.INTEGER,
        }, 
        
    })

    ProductCategory.associate = (models) => {
        ProductCategory.belongsTo(models.Product, { foreignKey: "product_id" })
        ProductCategory.belongsTo(models.Category, { foreignKey: "category_id" })
    }

    return ProductCategory
}