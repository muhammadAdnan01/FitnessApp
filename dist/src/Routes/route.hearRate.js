"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var heartRate = require('../Controllers/heartRateController');
var router = express_1.default.Router();
router.get('/getHeartRate', heartRate.findAllPublished);
router.post('/postHeartRate', heartRate.create);
module.exports = router;
