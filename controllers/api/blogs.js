const { TechInfo, Users } = require("../../models");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  const blog = await TechInfo.findOne({
    where: { id: req.params.id },
    include: Users,
  });
  res.render("blogs", {
    blog: blog.get({ plain: true }),
    logged_in: req.session.logged_in,
    user_name: req.session.username,
  });
});

module.exports = router;
