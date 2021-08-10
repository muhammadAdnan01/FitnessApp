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
var model = require('../../models');
var Controller = {};
function validateCreateRequest(req, res) {
    var body = req.body;
    console.log('request', req.body);
    if (!body) {
        res.status(400).send({
            message: 'request body is required',
        });
    }
    if (!body.title) {
        res.status(400).send({
            message: 'Activity title is Required',
        });
    }
    if (!body.type) {
        res.status(400).send({
            message: 'Activity Type is Required',
        });
    }
    if (!body.date) {
        res.status(400).send({
            message: 'Activity date is Required',
        });
    }
    if (!body.effortRate) {
        res.status(400).send({
            message: 'Activity effortRate is Required',
        });
    }
    if (!body.heartPoints) {
        res.status(400).send({
            message: 'Activity heartPoints is Required',
        });
    }
    if (!body.startTime) {
        res.status(400).send({
            message: 'Activity startTime is Required',
        });
    }
    if (!body.endTime) {
        res.status(400).send({
            message: 'Activity endTime is Required',
        });
    }
    if (!body.moveMinutes) {
        res.status(400).send({
            message: 'Activity Move Minutes is Required',
        });
    }
    if (!body.calories) {
        res.status(400).send({
            message: 'Activity calories is Required',
        });
    }
}
// Create and Save a new Activity
Controller.create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, activityBody, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                validateCreateRequest(req, res);
                activityBody = {
                    title: body.title,
                    type: body.type,
                    date: body.date,
                    steps: body.steps,
                    effortRate: body.effortRate,
                    heartPoints: body.heartPoints,
                    startTime: body.startTime,
                    endTime: body.endTime,
                    distance: body.distance,
                    moveMinutes: body.moveMinutes,
                    calories: body.calories,
                    notes: body.notes,
                    location: body.location,
                    userID: body.userID || null,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, model.Activities.create(activityBody)];
            case 2:
                data = _a.sent();
                res.send(data);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(500).send({
                    success: false,
                    message: error_1.message || 'Some error occurred while creating the Weight.',
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// Find all published Activitiess
Controller.findAllPublished = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, model.Activities.findAll()];
            case 1:
                data = _a.sent();
                res.send(data);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).send({
                    message: error_2.message || 'Some error occurred while retrieving Activities.',
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Retrieve all Activitiess from the database.
Controller.findAll = function (req, res) { };
// Find a single Activities with an id
Controller.findOne = function (req, res) { };
// Update a Activities by the id in the request
Controller.update = function (req, res) { };
// Delete a Activities with the specified id in the request
Controller.delete = function (req, res) { };
// Delete all Activitiess from the database.
Controller.deleteAll = function (req, res) { };
module.exports = Controller;
