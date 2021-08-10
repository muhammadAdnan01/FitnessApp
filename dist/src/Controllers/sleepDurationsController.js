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
var model = require('../../models/index');
var Controller = {};
function validateCreateRequest(req, res) {
    var body = req.body;
    console.log('request', req.body);
    if (!body) {
        res.status(400).send({
            message: 'request body is required',
        });
    }
    if (!body.sleepTime) {
        res.status(400).send({
            message: 'Sleep Time is Required',
        });
    }
    if (!body.awakeTime) {
        res.status(400).send({
            message: 'Awake Time is Required',
        });
    }
    if (!body.date) {
        res.status(400).send({
            message: 'Date Time is Required',
        });
    }
}
// Create and Save a new Activity
Controller.create = function (req, res) {
    var body = req.body;
    validateCreateRequest(req, res);
    var sleepDurationsBody = {
        sleepTime: body.sleepTime,
        awakeTime: body.awakeTime,
        date: body.date,
        userID: body.userID || 45,
    };
    model.SleepDurations.create(sleepDurationsBody)
        .then(function (data) {
        res.send(data);
    })
        .catch(function (err) {
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the HeartRate.',
        });
    });
};
// Find all published Sleep Durations
Controller.findAllPublished = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        try {
            data = model.SleepDurations.findAll();
            res.send(data);
        }
        catch (error) {
            res.status(500).send({
                message: error.message ||
                    'Some error occurred while retrieving Sleep Durations.',
            });
        }
        return [2 /*return*/];
    });
}); };
// Retrieve all Sleep Durations from the database.
Controller.findAll = function (req, res) { };
// Find a single Sleep Durations with an id
Controller.findOne = function (req, res) { };
// Update a Sleep Durations by the id in the request
Controller.update = function (req, res) { };
// Delete a Sleep Durations with the specified id in the request
Controller.delete = function (req, res) { };
// Delete all Sleep Durations from the database.
Controller.deleteAll = function (req, res) { };
module.exports = Controller;
