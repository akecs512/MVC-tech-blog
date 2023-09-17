const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");


router.post("/", async (req, res) => {
  try {
    const data = { ...req.body, userId: req.session.userId };
    const techData = await Post.create(data);
    res.status(200).json(techData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Post.findAll();
    const posts = data.map((post) => post.get({ plain: true }));
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  console.log(req.params);
  const posts = await Post.findOne({ where: { id: req.params.id } }, );
  res.status(200)
  res.send(JSON.stringify(posts));
});



router.put("/:id", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
})


router.delete('/:id', async (req, res) => {
  const post = await Post.findOne({ where: { id: req.params.id },}, )

  await post.destroy();
  res.status(200)
  res.send(JSON.stringify(post));

  // delete a category by its `id` value
});


module.exports = router;
