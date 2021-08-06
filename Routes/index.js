const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
      servers: ['http://localhost:3000'],
    },
  },

  apis: ['./HeartRate/*.js', './Auth/*.js'],
};

const openApiSpecification = swaggerJsdoc(options);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpecification));
router.use(authMiddleware);
<<<<<<< Updated upstream
router.use('/activities', require('./Activities'));
router.use('/heartRate', require('./HeartRate'));
router.use('/Weight', require('./Weight'));
router.use('/SleepDuration', require('./SleepDuration'));
router.use('/User', require('./User'));
=======
router.use('/auth', require('./route.auth'));
router.use('/activities', require('./route.activities'));
router.use('/heartRate', require('./route.hearRate'));
router.use('/Weight', require('./route.weight'));
router.use('/SleepDuration', require('./route.sleepDurations'));
>>>>>>> Stashed changes

module.exports = router;
