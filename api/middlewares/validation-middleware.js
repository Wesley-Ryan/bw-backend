const jwt = require("jsonwebtoken");
const secret = "berries"; // move to env
const Helper = require("../users/user-model");

const validatePayload = (req, res, next) => {
  const user = req.body;
  if (!user.username || !user.password) {
    res.status(401).json("username and password required");
  } else {
    req.User = user;
    next();
  }
};

const validateUsernameUnique = async (req, res, next) => {
  try {
    const exsistingUser = Helper.findBy({ username: req.body.username });
    if (!exsistingUser.length) {
      next();
    } else {
      res.status(400).json("username taken");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const validator = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json("token required");
  } else {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        res.status(401).json("invalid token");
      } else {
        req.decodedToken = decoded;
        next();
      }
    });
  }
};

const validatePermissions = (user) => {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
};

module.exports = {
  validator,
  validatePermissions,
  validatePayload,
  validateUsernameUnique,
};
