const express = require('express');

const router = express.Router();

router.post('/authenticate', (req, res) => {
  console.log('got authentication request here ');
});

router.post('/signup', (req, res) => {
  console.log('got signup request here ');
});
module.exports = router;
