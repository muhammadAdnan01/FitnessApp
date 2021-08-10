"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
var config = process.env;
var verifyToken = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    try {
        console.log('req', req.body.token);
        var decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
    }
    catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();
};
module.exports = verifyToken;
