const express = require("express");
const router = express.Router();

const TransactionController = require("../controllers/TransactionController");
const authentication = require("../middlewares/authenticate");
const {
    authorization,
    adminAuthorize,
} = require("../middlewares/authorization");

router.use(authentication);

router.post("/", TransactionController.purchase);

router.get("/", TransactionController.getTransactions);

module.exports = router;
