const express = require('express');
const router = express.Router();
const { getTimeStamp } = require('../controllers/timestampController');

// date API endpoint
router.route('/:date?').get(getTimeStamp);

module.exports = router;
