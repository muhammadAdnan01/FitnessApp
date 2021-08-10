"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Activities = require('../Controllers/ActivityController');
var router = express_1.default.Router();
router.get('/getActivity', Activities.findAllPublished);
router.post('/postActivity', Activities.create);
module.exports = router;
