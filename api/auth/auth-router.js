const express = require("express");
const bcrypt = require("bcryptjs");
const Helper = require("../users/user-model");
const tokenCreator = require("./token-creator");
const {
  validatePermissions,
  validatePayload,
  validateUsernameUnique,
} = require("../middlewares/validation-middleware");

const router = express.Router();

router.post("/signup", validatePayload, validateUsernameUnique, (req, res) => {
  if (validatePermissions(req.User)) {
    const hash = bcrypt.hashSync(req.User.password, 9);
    req.User.password = hash;
    Helper.create(req.User)
      .then((usr) => {
        res.status(201).json(usr);
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  } else {
    res.status(400).json({ message: "Invalid credentials, please try again." });
  }
});

router.post("/login", validatePayload, (req, res) => {
  if (validatePermissions(req.body)) {
    Helper.findBy({ username: req.body.username })
      .then(([user]) => {
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
          const token = tokenCreator(user);
          res.status(200).json({
            message: "Welcome, " + user.username,
            token,
            role: user.role,
          });
        } else {
          res.status(401).json("Invalid credentials, please try again.");
        }
      })
      .catch((err) => res.status(500).json(err.message));
  } else {
    res.status(401).json("Invalid credentials, please try again.");
  }
});

module.exports = router;
