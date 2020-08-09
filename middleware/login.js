const config = require("config");
const jwt = require("jsonwebtoken");

function login(req, res, next) {
  const token = req.header("x-auth-token");

  // token болмаса
  if (!token) {
    res.status(401).json({ msg: "Without token, you can not go to this page" });

    try {
      //  Мына жер примерно tokenды алып алуго, если token болса тогда келеси функцияга отеды типо next()
      const token = jwt.verify(token, config.get("jwtSecret"));

      req.user = decoded;
      next();
    } catch (e) {
      res.status(400).json({ msg: "Token is not valid" });
    }
  }
}
module.exports = login;
