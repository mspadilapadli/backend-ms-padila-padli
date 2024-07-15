"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.hasMany(models.Transaction, { foreignKey: "productId" });
            Product.belongsTo(models.User, { foreignKey: "merchantId" });
        }
    }
    Product.init(
        {
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
            stock: DataTypes.INTEGER,
            merchantId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
