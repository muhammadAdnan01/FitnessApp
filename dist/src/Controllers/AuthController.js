"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');
var jsonwebtoken = require('jsonwebtoken');
var model = require('../../models');
var Controller = {};
Controller.authenticateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, passwordIsValid, userInfo, token, apiToken, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password) {
                    res.status(400).send({
                        success: false,
                        msg: 'Please Enter Email & Password',
                    });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, model.Auth.findOne({
                        where: {
                            email: req.body.email,
                        },
                    })];
            case 2:
                user = _b.sent();
                if (!user) return [3 /*break*/, 4];
                passwordIsValid = bcrypt.compareSync(password, user.password);
                if (!passwordIsValid) {
                    res.status(401).send({
                        accessToken: null,
                        message: 'Invalid  Email OR Password!',
                    });
                }
                return [4 /*yield*/, model.user.findOne({
                        where: {
                            email: req.body.email,
                        },
                    })];
            case 3:
                userInfo = _b.sent();
                if (userInfo) {
                    token = jwt.encode(userInfo, 'foo');
                    apiToken = jsonwebtoken.sign({ id: userInfo.dataValues.id }, process.env.JWT_KEY, {
                        expiresIn: 86400, // 24 hours
                    });
                    res.status(200).send({
                        success: true,
                        token: "JWT" + token,
                        accessToken: apiToken,
                        userInfo: userInfo,
                    });
                }
                return [3 /*break*/, 5];
            case 4:
                res.status(400).send({
                    success: false,
                    msg: 'User doesnt exists',
                });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _b.sent();
                res.status(400).send({
                    success: false,
                    msg: error_1,
                });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
Controller.createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, name, weight, height, DOB, stepsGoal, heartPointsGoal, sleepTime, awakeTime, gender, password, user, hashPassword;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, name = _a.name, weight = _a.weight, height = _a.height, DOB = _a.DOB, stepsGoal = _a.stepsGoal, heartPointsGoal = _a.heartPointsGoal, sleepTime = _a.sleepTime, awakeTime = _a.awakeTime, gender = _a.gender, password = _a.password;
                if (!(!email || !password)) return [3 /*break*/, 1];
                res.json({
                    success: false,
                    msg: 'Please Enter Valid Email & Password',
                });
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, model.user.findOne({
                    where: {
                        email: req.body.email,
                    },
                })];
            case 2:
                user = _b.sent();
                if (user) {
                    res.status(400).send({
                        success: false,
                        msg: 'Email Already exists',
                    });
                }
                else {
                    try {
                        model.sequelize.sync();
                        model.user.create({
                            email: email,
                            name: name,
                            weight: weight,
                            height: height,
                            DOB: DOB,
                            stepsGoal: stepsGoal,
                            heartPointsGoal: heartPointsGoal,
                            sleepTime: sleepTime,
                            awakeTime: awakeTime,
                            gender: gender,
                        });
                        hashPassword = bcrypt.hashSync(password, 8);
                        model.Auth.create({
                            email: email,
                            password: hashPassword,
                        });
                        res.status(200).send("User Created Sucessfully");
                    }
                    catch (error) {
                        res.status(500).send({
                            success: false,
                            errormsg: error,
                        });
                    }
                }
                _b.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
module.exports = Controller;
