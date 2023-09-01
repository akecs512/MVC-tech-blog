const router = require("express").Router();
const Post = require("../../models/Post");

router.post("/", async (req, res) => {
  try {
    const data = { ...req.body, userId: req.session.userId };
    const techData = await Post.create(data);
    res.status(200).json(techData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
