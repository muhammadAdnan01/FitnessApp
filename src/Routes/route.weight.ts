import express from 'express';
const weightController = require('../Controllers/weightController');

const router = express.Router();

router.get('/getWeight', weightController.findAllPublished);

router.post('/postWeight', weightController.create);

module.exports = router;
