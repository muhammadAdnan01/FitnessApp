"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var weightController = require('../Controllers/weightController');
var router = express_1.default.Router();
router.get('/getWeight', weightController.findAllPublished);
router.post('/postWeight', weightController.create);
module.exports = router;
