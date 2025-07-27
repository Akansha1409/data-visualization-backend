const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

router.get('/data', async (req, res) => {
  try {
    const data = await Data.find(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
