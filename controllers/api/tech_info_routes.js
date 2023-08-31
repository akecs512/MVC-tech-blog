const router = require('express').Router();
const TechInfo = require('../../models/Tech_Info');
const User = require('../../models/Users');



  router.post('/', async (req, res) => {
  try { 
      let techdata = {...req.body,"user_id":req.session.user_id}
      const techData = await TechInfo.create(techdata);

    // if the dish is successfully created, the new response will be returned as json
    res.status(200).json(techData)
  } catch (err) {
    res.status(500).json(err);
  }
  });

  module.exports = router;