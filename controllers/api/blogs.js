const { TechInfo } = require("../../models");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  const blog = await TechInfo.findOne({ where: { id: req.params.id } });
  res.render("blogs", { blog: blog.get({ plain: true }) });
});

module.exports = router;
