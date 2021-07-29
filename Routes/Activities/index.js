const express = require('express');

const router = express.Router();

router.get('/getActivity', (req, res) => {
  console.log('got authentication request here ');
});

router.post('/postActivity', (req, res) => {
  console.log('got signup request here ');
});
module.exports = router;
