const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const swaggerJsdoc = require('swagger-jsdoc');
const { Client } = require('pg');
const Sequelize = require('sequelize');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
      servers: ['http://localhost:3000'],
    },
  },
  apis: ['server.js'], // files containing annotations as above
};

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

const openapiSpecification = swaggerJsdoc(options);
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use('/auth', require('./Routes/Auth'));
app.use('/activities', require('./Routes/Activities'));
app.use('/heartRate', require('./Routes/HeartRate'));
app.use('/Weight', require('./Routes/Weight'));
app.use('/SleepDuration', require('./Routes/SleepDuration'));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.listen(port);
console.log('app is listening at port', port);
