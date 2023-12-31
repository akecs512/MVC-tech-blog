const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Comment, Post, User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newComment = {
      ...req.body,
      userId: req.session.userId,
    };
    console.log(newComment)
    const postComment = await Comment.create(newComment);
    res.status(200).json(postComment);
  } catch (err) {
    console.log(">>> Failed to create comment:", err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [User, Post],
    });
    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/comment/:id", withAuth, async (req, res) => {
  try {
    const commentId = req.params.id;
    const deletePost = await Comment.destroy({
      where: {
        id: commentId,
        userId: req.session.userId,
      },
    });

    if (deletePost === 0) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
