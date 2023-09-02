const router = require("express").Router();
const { TechInfo } = require("../models");
const User = require("../models/Users");
const withAuth = require("../utils/auth");

router.get("/login", (req, res) => {
  try {
    res.render("login", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await TechInfo.findAll({ include: User });
    const blogPosts = data.map((tech_info) => tech_info.get({ plain: true }));
    console.log(blogPosts);
    res.render("home", {
      blogPosts: blogPosts,
      logged_in: req.session.logged_in,
      user_name: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, (req, res) => {
  try {
    res.render("dashboard", {
      logged_in: req.session.logged_in,
      user_name: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
