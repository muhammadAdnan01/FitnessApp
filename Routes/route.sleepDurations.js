const express = require('express');

const sleepDurations = require('../Controllers/sleepDurationsController');

const router = express.Router();

router.get('/getSleepDuration', sleepDurations.findAllPublished);

router.post('/postSleepDuration', sleepDurations.create);
module.exports = router;
