const sequelize = require('sequelize')
const db = require('../configuration/database')


module.exports = (sequelize, DataTypes) => {
    const Customer = db.define('Customer', {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING(35),
            allowNull: false,
            unique: true,
        }, 
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        full_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        billing_address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        default_shipping_address: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: false,
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })

    Customer.associate = (models) => {
        Customer.hasMany(models.Order)
    }

    return Customer


}