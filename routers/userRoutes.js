const express = require("express");
const UserController = require("../controllers/UserController");
const { adminAuthorize } = require("../middlewares/authorization");
const authentication = require("../middlewares/authenticate");
const router = express.Router();

router.post("/register", UserController.register);

router.post("/login", UserController.login);

module.exports = router;
