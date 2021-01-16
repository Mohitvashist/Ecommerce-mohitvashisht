const express = require("express");
const {
  validateRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../../validators/auth");
const router = express.Router();
const { signup, signin } = require("./../../controllers/admin/auth");
const { authorized } = require("./../../common-middlewares");

router.post("/admin/signin", validateSignInRequest, isRequestValidated, signin);

router.post("/admin/signup", validateRequest, isRequestValidated, signup);

module.exports = router;
