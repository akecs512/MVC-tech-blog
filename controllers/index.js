const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./homeRoutes");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

router.use((_req, res) => {
  res.status(404).render("404");
});

module.exports = router;
