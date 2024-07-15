const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductContoller");
const authentication = require("../middlewares/authenticate");
const {
    authorization,
    adminAuthorize,
} = require("../middlewares/authorization");

// router.get("/", (req, res) => {
//     res.send(`hello lodgings`);
// });

router.use(authentication);

router.get("/", ProductController.getAllProduct);

router.post("/add", authorization, ProductController.addProduct);

router.get("/:id", ProductController.getProductById);

router.put("/:id", adminAuthorize, ProductController.putProduct);

router.delete("/:id", adminAuthorize, ProductController.deleteProduct);

module.exports = router;
