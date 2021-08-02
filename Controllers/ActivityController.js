const db = require('../models/index');

const Activities = db.activities;

const { Op } = db.Sequelize;

// Create and Save a new Activity
exports.create = (req, res) => {};

// Find all published Activitiess
exports.findAllPublished = (req, res) => {
  Activities.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Activitiess.',
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
