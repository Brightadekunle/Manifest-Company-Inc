const sequelize = require('sequelize')
const db = require('../configuration/database')


const sequelize = require('sequelize')
const db = require('../configuration/database')


const sequelize = require('sequelize')
const db = require('../configuration/database')

module.exports = (sequelize, DataTypes) => {
    const Order = db.define('Order', {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        order_address: {
            type: Sequelize.STRING(35),
            allowNull: false,
            unique: true,
        },
        order_date: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        order_email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        order_status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        shipping_address: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: false,
        },
        amount: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        customer_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },

    })

    Order.associate = (models) => {
        Order.belongsTo(models.Customer, { foreignKey: 'customer_id' })
        Order.belongsToMany(models.Product, { through: "OrderDetails", foreignKey: "order_id" })
    }

    return Order
}