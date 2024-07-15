const { Op } = require("sequelize");
const { Product } = require("../models");
const axios = require("axios");
class ProductController {
    static async addProduct(req, res, next) {
        try {
            // console.log(req.user);
            console.log(req.user.id, "<<<<userId");
            console.log(req.body, "<<<<<body");
            req.body.merchantId = req.user.id;
            const product = await Product.create({
                ...req.body,
            });
            res.status(201).json({
                message: `new product ${product.name} has been added`,
                product,
                // message: `create success`,
            });
        } catch (error) {
            // console.log(error);
            next(error);
        }
    }

    static async getAllProduct(req, res, next) {
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }

    static async getProductById(req, res, next) {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);
            if (!product) throw { name: "NotFound" };

            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }
    static async putProduct(req, res, next) {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);
            if (!product) throw { name: "NotFound" };
            req.body.merchantId = req.user.id;
            await Product.update(req.body, {
                where: { id },
            });
            let updated = await Product.findByPk(id);
            // console.log(updated);

            res.status(200).json({
                message: `product with id ${product.id} has been updated`,
                updated,
            });
        } catch (error) {
            next(error);
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);
            if (!product) throw { name: "NotFound" };
            await Product.destroy({
                where: { id },
            });

            res.status(200).json({
                message: `${product.name} has been deleted`,

                // message: `success to delete `,
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ProductController;
