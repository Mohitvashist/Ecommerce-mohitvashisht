const jwt = require("jsonwebtoken");
exports.authorized = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } else return res.status(400).send({ message: "Authorization required" });
};
exports.userMiddleware = (req, res, next) => {};

exports.adminMiddleware = (req, res, next) => {
  if (req.user.role != "admin")
    return res.status(400).json({ message: "Access Denied" });
  next();
};
