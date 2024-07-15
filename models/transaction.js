"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Transaction.belongsTo(models.User, { foreignKey: "customerId" });
            Transaction.belongsTo(models.Product, { foreignKey: "productId" });
        }
    }
    Transaction.init(
        {
            customerId: DataTypes.INTEGER,
            productId: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            totalPrice: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Transaction",
        }
    );
    return Transaction;
};
