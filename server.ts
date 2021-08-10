require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const { Client } = require('pg');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'todo_database',
  password: '1234',
  port: 5432,
});
// -------------- Connecting with db ------- //
client.connect().catch((err: any) => console.error(err));
// -------------- APP ROUTES ------- //
app.use(require('./src/Routes'));

app.listen(port);
console.log('app is listening at port', port);
