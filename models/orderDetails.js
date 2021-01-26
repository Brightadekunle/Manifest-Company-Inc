const sequelize = require('sequelize')
const db = require('../configuration/database')

module.exports = (sequelize, DataTypes) => {
    const OrderDetails = db.define('OrderDetails', {
        order_id: {
            type: Sequelize.INTEGER,
        },
        product_id: {
            type: Sequelize.INTEGER,
        }, 
        sku: {
            type: Sequelize.STRING(35),
            allowNull: false,
        }, 
        quantity: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        
    })

    OrderDetails.associate = (models) => {
        OrderDetails.belongsTo(models.Order, { foreignKey: 'order_id' })
        OrderDetails.belongsTo(models.Product, { foreignKey: "product_id" })
    }

    return OrderDetails
}