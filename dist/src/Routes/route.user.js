"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user = require('../Controllers/userController');
var router = express_1.default.Router();
router.get('/getUserInfo/:id', user.findOne);
module.exports = router;
