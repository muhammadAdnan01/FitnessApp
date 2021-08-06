const express = require('express');

const heartRate = require('../Controllers/heartRateController');

const router = express.Router();

router.get('/getHeartRate', heartRate.findAllPublished);

router.post('/postHeartRate', heartRate.create);
module.exports = router;
