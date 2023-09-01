const router = require("express").Router();
const apiRoutes = require("./api");
const pageRoutes = require("./pageRoutes");

router.use("/", pageRoutes);
router.use("/api", apiRoutes);

router.use((_req, res) => {
  res.status(404).render("404");
});

module.exports = router;
