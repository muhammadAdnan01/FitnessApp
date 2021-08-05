const db = require('../models/index');

const { weight } = db;

const { Op } = db.Sequelize;

function validateCreateRequest(req, res) {
  const { body } = req;
  console.log('request', req.body);
  if (!body) {
    res.status(400).send({
      message: 'request body is required',
    });
  }
  if (!body.value) {
    res.status(400).send({
      message: 'Weight Value is Required',
    });
  }
  if (!body.date || !body.time) {
    res.status(400).send({
      message: ' Time/date is Required',
    });
  }
}

// Create and Save a new Activity
exports.create = (req, res) => {
  const { body } = req;
  // validateCreateRequest(req, res);
  const sleepDurationsBody = {
    value: body.value,
    date: body.date,
    time: body.time,
    userID: body.userID || 45,
  };
  weight
    .create(sleepDurationsBody)
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

// Find all published weight
exports.findAllPublished = (req, res) => {
  weight
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving weight.',
      });
    });
};

// Retrieve all weight from the database.
exports.findAll = (req, res) => {};

// Find a single weight with an id
exports.findOne = (req, res) => {};

// Update a weight by the id in the request
exports.update = (req, res) => {};

// Delete a weight with the specified id in the request
exports.delete = (req, res) => {};

// Delete all weight from the database.
exports.deleteAll = (req, res) => {};
