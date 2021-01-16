const express = require("express");
const {
  validateRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../validators/auth");
const router = express.Router();
const { signup, signin } = require("./../controllers/auth");
const { authorized } = require("./../common-middlewares");

router.post("/signup", validateRequest, isRequestValidated, signup);

router.post("/signin", validateSignInRequest, isRequestValidated, signin);

router.post("/profile", authorized, (req, res) => {
  res.status(200).json({ user: req.user });
});
module.exports = router;
