const sequelize = require('sequelize')
const db = require('../configuration/database')


module.exports = (sequelize, DataTypes) => {
    const Product = db.define('Order', {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        sku: {
            type: Sequelize.STRING(35),
            allowNull: false,
            unique: true,
        }, 
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        price: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        weight: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: false,
        },
        thumbnail: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        create_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },  
    })

    Product.associate = (models) => {
        Product.belongsToMany(models.Order, { through: "OrderDetails", foreignKey: "product_id" })
        Product.belongsToMany(models.Options, { through: "ProductOption", foreignKey: "product_id" })
        Product.belongsToMany(models.Category, { through: "ProductCategory", foreignKey: "product_id" })
    }

    return Product
}