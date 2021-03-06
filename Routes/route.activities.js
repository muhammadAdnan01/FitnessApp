const express = require('express');
const Activities = require('../Controllers/ActivityController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/getActivity', Activities.findAllPublished);

router.post('/postActivity', Activities.create);

module.exports = router;
