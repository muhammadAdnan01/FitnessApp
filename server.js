"use strict";
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var Client = require('pg').Client;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_database',
    password: '1234',
    port: 5432,
});
// -------------- Connecting with db ------- //
client.connect().catch(function (err) { return console.error(err); });
// -------------- APP ROUTES ------- //
app.use(require('./src/Routes'));
app.listen(port);
console.log('app is listening at port', port);
