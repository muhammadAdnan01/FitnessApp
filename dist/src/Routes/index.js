"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var swaggerJsdoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var authMiddleware = require('../middleware/auth');
var router = express_1.default.Router();
var options = {
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
var openApiSpecification = swaggerJsdoc(options);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpecification));
router.use('/auth', require('./route.auth'));
router.use(authMiddleware);
router.use('/activities', require('./route.activities'));
router.use('/heartRate', require('./route.hearRate'));
router.use('/Weight', require('./route.weight'));
router.use('/SleepDuration', require('./route.sleepDurations'));
module.exports = router;
