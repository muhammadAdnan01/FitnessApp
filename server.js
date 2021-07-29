const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const { Client } = require('pg');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('todo_database', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

// Defined Routes

app.use('/auth', require('./Api/Auth'));
app.use('/activities', require('./Api/Activities'));
app.use('/heartRate', require('./Api/HeartRate'));
app.use('/Weight', require('./Api/Weight'));
app.use('/SleepDuration', require('./Api/SleepDuration'));

app.listen(port);
console.log('app is listening at port', port);
