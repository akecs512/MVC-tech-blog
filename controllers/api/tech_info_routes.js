const router = require("express").Router();
const TechInfo = require("../../models/Tech_Info");
const Comment = require("../../models/Comments")
const Users = require("../../models/Users")

router.post("/", async (req, res) => {
  try {
    const data = { ...req.body, user_id: req.session.user_id };
    const techData = await TechInfo.create(data);
    res.status(200).json(techData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/comments", async (req, res) => {
  try {
    const data = { ...req.body, user_id: req.session.user_id };
    const comment = await Comment.create(data)
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(err);
  }
});
module.exports = router;
