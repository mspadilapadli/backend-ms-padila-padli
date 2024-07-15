const { Transaction, Product, User } = require("../models");

class TransactionController {
    static async purchase(req, res, next) {
        try {
            const { productId, quantity } = req.body;
            const product = await Product.findByPk(productId);

            if (!product) throw { name: "NotFound" };

            if (product.stock < quantity) {
                return res.status(400).json({ message: "Insufficient stock" });
            }

            const totalPrice = product.price * quantity;
            const discount = totalPrice > 50000 ? totalPrice * 0.1 : 0;
            const shippingCost = totalPrice > 15000 ? 0 : 5000; // Contoh biaya kirim
            const finalPrice = totalPrice - discount + shippingCost;

            const transaction = await Transaction.create({
                productId: productId,
                customerId: req.user.id,
                quantity,
                totalPrice: finalPrice,
            });

            // Mengurangi kuantitas produk
            product.stock -= quantity;
            await product.save();

            res.json({
                message: `Transaction success`,
                transaction,
                discount,
                shippingCost,
                finalPrice,
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    static async getTransactions(req, res, next) {
        try {
            const transactions = await Transaction.findAll({
                include: [
                    {
                        model: Product,
                        attributes: ["name", "merchantId"],
                        where: {
                            merchantId: req.user.id,
                        },
                    },
                    {
                        model: User,
                        attributes: ["username"],
                    },
                ],
            });
            res.json(transactions);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
}
module.exports = TransactionController;
