"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AuthController = require('../Controllers/AuthController');
var router = express_1.default.Router();
/**
 * @swagger
 * components:

 *   schemas:
 *     UserAuthenticate:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: user email
 *           value : adnan@adnan.com
 *         password:
 *           type: string
 *           description: user password
 *
 */
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: user Authenticate
 */
/**
 * @swagger
 * /auth/authenticate:
 *   post:
 *     summary: Authenticate User
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: user data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserAuthenticate'
 */
router.post('/authenticate', AuthController.authenticateUser);
router.post('/signup', AuthController.createUser);
module.exports = router;
