const router = require('express').Router();
const TravelInfo = require('../../models/Travel_Info');
const User = require('../../models/Users');



  router.post('/', async (req, res) => {
  try { 
      let traveldata = {...req.body,"user_id":req.session.user_id}
      const travelData = await TravelInfo.create(traveldata);

    // if the dish is successfully created, the new response will be returned as json
    res.status(200).json(travelData)
  } catch (err) {
    res.status(500).json(err);
  }
  });

  module.exports = router;