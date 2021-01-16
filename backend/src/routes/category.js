const express = require("express");
const { authorized, adminMiddleware } = require("../common-middlewares");
const router = express.Router();

const { addCategory, getCategories } = require("./../controllers/category");

router.post("/category/create", authorized, adminMiddleware, addCategory);
router.post("/category/getcategories", getCategories);

module.exports = router;
