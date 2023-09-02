const router = require("express").Router();
const path = require("path");
const User = require("../../models/Users");

router.get("/", (req, res) => {
  res.render("login", {});
});

module.exports = router;
