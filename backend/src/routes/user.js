const express = require("express");
const {
  validateRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../validators/auth");
const router = express.Router();
const { signup, signin, authorized } = require("./../controllers/auth");

router.post("/signup", validateRequest, isRequestValidated, signup);

router.post("/signin", validateSignInRequest, isRequestValidated, signin);

router.post("/profile", authorized, (req, res) => {
  res.status(200).json({ user: req.user });
});
module.exports = router;
