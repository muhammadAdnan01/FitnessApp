const db = require('../models/index');

const Activities = db.activities;

const { Op } = db.Sequelize;

function validateCreateRequest(req, res) {
  const { body } = req;
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
exports.create = (req, res) => {
  const { body } = req;
  validateCreateRequest(req, res);
  const activityBody = {
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
  Activities.create(activityBody)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Weight.',
      });
    });
};

// Find all published Activitiess
exports.findAllPublished = (req, res) => {
  Activities.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Activities.',
      });
    });
};

// Retrieve all Activitiess from the database.
exports.findAll = (req, res) => {};

// Find a single Activities with an id
exports.findOne = (req, res) => {};

// Update a Activities by the id in the request
exports.update = (req, res) => {};

// Delete a Activities with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Activitiess from the database.
exports.deleteAll = (req, res) => {};
