const express = require('express');

const router = express.Router();

router.get('/getWeight', (req, res) => {
  console.log('got authentication request here ');
});

router.post('/postWeight', (req, res) => {
  console.log('got signup request here ');
});
module.exports = router;
