import express from 'express';

const user = require('../Controllers/userController');

const router = express.Router();

router.get('/getUserInfo/:id', user.findOne);

module.exports = router;
