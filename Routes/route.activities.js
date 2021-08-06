const express = require('express');
const Activities = require('../Controllers/ActivityController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/getActivity', auth, Activities.findAllPublished);

router.post('/postActivity', auth, Activities.create);

module.exports = router;
