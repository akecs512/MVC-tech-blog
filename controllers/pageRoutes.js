const router = require("express").Router();
const { Post, User, Comment } = require("../models");
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
    const data = await Post.findAll({ include: User, Comment});
    const posts = data.map((post) => post.get({ plain: true }));
    res.render("home", {
      posts: posts,
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

router.get("/posts/:id", async (req, res) => {
  const post = await Post.findOne({
    where: { id: req.params.id },
    include: User,
  });
  res.render("selectedPost", { post: post.get({ plain: true }) });
});

module.exports = router;
