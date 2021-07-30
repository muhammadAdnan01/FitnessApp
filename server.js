const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;
const swaggerJsdoc = require('swagger-jsdoc');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
      servers: ['http://localhost:3000'],
    },
  },
  // apis: ['./Routes/Test*.js'], // files containing annotations as above
  apis: ['./Routes/Test/*.js'],
};

const openApiSpecification = swaggerJsdoc(options);
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// -------------- APP ROUTES ------- //

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpecification));
app.use('/auth', require('./Routes/Auth'));
app.use('/activities', require('./Routes/Activities'));
app.use('/heartRate', require('./Routes/HeartRate'));
app.use('/Weight', require('./Routes/Weight'));
app.use('/SleepDuration', require('./Routes/SleepDuration'));
app.use('/TestRoute', require('./Routes/Test'));

// app.use('/books', booksRouter);

app.listen(port);
console.log('app is listening at port', port);
