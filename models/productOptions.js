const sequelize = require('sequelize')
const db = require('../configuration/database')

module.exports = (sequelize, DataTypes) => {
    const ProductOption = db.define('ProductOption', {
        option_id: {
            type: Sequelize.INTEGER,
        },
        product_id: {
            type: Sequelize.INTEGER,
        },
    })

    ProductOption.associate = function(models) {
        ProductOption.belongsTo(models.Product, {foreignKey: 'product_id'})
        ProductOption.belongsTo(models.Options, {foreignKey: 'option_id'})
      };
      return ProductOption;
}