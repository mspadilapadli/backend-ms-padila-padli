const express = require("express");
const router = express.Router();

router.use("/user", require("./userRoutes"));
router.use("/transaction", require("./transactionRouters"));
router.use("/product", require("./productRouters"));

module.exports = router;
