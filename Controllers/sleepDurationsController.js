const db = require('../models/index');

const { sleepDurations } = db;

const { Op } = db.Sequelize;

function validateCreateRequest(req, res) {
  const { body } = req;
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
exports.create = (req, res) => {
  const { body } = req;
  validateCreateRequest(req, res);
  const sleepDurationsBody = {
    sleepTime: body.sleepTime,
    awakeTime: body.awakeTime,
    date: body.date,
    userID: body.userID || 45,
  };
  sleepDurations
    .create(sleepDurationsBody)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the HeartRate.',
      });
    });
};

// Find all published Sleep Durations
exports.findAllPublished = (req, res) => {
  sleepDurations
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving Sleep Durations.',
      });
    });
};

// Retrieve all Sleep Durations from the database.
exports.findAll = (req, res) => {};

// Find a single Sleep Durations with an id
exports.findOne = (req, res) => {};

// Update a Sleep Durations by the id in the request
exports.update = (req, res) => {};

// Delete a Sleep Durations with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Sleep Durations from the database.
exports.deleteAll = (req, res) => {};
