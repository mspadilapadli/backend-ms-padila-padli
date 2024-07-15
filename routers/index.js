const express = require("express");
const router = express.Router();

// router.use("/pub", require("./lodging"));
router.use("/user", require("./userRoutes"));
router.use("/product", require("./productRouters"));
// router.use("/types", require("./type"));
module.exports = router;
