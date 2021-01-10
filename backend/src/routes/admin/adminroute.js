const express = require("express");
const {
  validateRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../../validators/auth");
const router = express.Router();
const {
  signup,
  signin,
  authorized,
} = require("./../../controllers/admin/auth");

router.post("/admin/signin", validateSignInRequest, isRequestValidated, signin);

router.post("/admin/signup", validateRequest, isRequestValidated, signup);

module.exports = router;
