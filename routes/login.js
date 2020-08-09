const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// User model
const User = require("../modals/User");

// Login page
// localhost:5000/login
router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Барлық fieldты толтыршиш" });
  }
  // Check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "Ондай user жок" });
    // Validate Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Дұрыс пароль жазшиш" });
      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        {
          expiresIn: 7200,
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              password: user.password,
            },
          });
        }
      );
    });
  });
});

module.exports = router;
