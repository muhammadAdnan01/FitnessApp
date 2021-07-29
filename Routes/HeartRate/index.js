const express = require('express');

const router = express.Router();

router.get('/getHeartRate', (req, res) => {
  console.log('got authentication request here ');
});

router.post('/postHeartRate', (req, res) => {
  console.log('got signup request here ');
});
module.exports = router;
