const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// User model
const User = require("../modals/User");

// Register page
// localhost:5000/register
router.post("/", (req, res) => {
  const { name, email, password, password2 } = req.body;

  // field check
  if (!name || !email || !password || !password2) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // password check
  if (password !== password2) {
    return res
      .status(400)
      .json({ msg: "Your confirmation password is not same" });
  }
  // ондай email барма жокпа check
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });
    const newUser = new User({
      name,
      email,
      password,
    });

    // Create salt & hash
    // парольды крч зашифровка
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
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
  });
});

module.exports = router;
