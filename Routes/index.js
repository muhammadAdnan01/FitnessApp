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
router.use('/auth', require('./Auth'));

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpecification));
router.use(authMiddleware);
router.use('/activities', require('./Activities'));
router.use('/heartRate', require('./HeartRate'));
router.use('/Weight', require('./Weight'));
router.use('/SleepDuration', require('./SleepDuration'));

module.exports = router;
