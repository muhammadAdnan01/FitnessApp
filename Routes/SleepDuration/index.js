const express = require('express');

const router = express.Router();

router.get('/getSleepDuration', (req, res) => {
  console.log('got authentication request here ');
});

router.post('/postSleepDuration', (req, res) => {
  console.log('got signup request here ');
});
module.exports = router;
