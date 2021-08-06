const express = require('express');

const user = require('../../Controllers/userController');

const router = express.Router();

router.get('/getUserInfo/:id', user.findOne);

module.exports = router;
