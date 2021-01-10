const { check, validationResult } = require("express-validator");
exports.validateRequest = [
  check("firstName").notEmpty().withMessage("first Name is required"),
  check("lastName").notEmpty().withMessage("last name is required"),
  check("email").isEmail().withMessage("email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be 6 char long"),
];
exports.validateSignInRequest = [
  check("email").isEmail().withMessage("email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be 6 char long"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
