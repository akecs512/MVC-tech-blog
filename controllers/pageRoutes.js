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
    const data = await Post.findAll({ include: User, Comment });
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

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const data = await Post.findAll({ include: [User, Comment], where: { userId: req.session.userId } });
    const posts = data.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts: posts,
      logged_in: req.session.logged_in,
      user_name: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/posts/:id", withAuth, async (req, res) => {
  const post = await Post.findOne({
    where: { id: req.params.id },
    include: [User, Comment],
  });
  
  const comments = await Promise.all(post.comments.map(async (rawComment) => {
    const comment = rawComment.get({ plain: true });
    const userRaw = await User.findOne({ where: {id: comment.userId }})
    const user = userRaw.get({plain: true})
    return { ...comment, user: user.username  }
  }));
  res.render("selectedPost", {
    logged_in: req.session.logged_in,
    user_name: req.session.username,
    comments,
    post: post.get({ plain: true }),
  });
});

module.exports = router;
