const db = require('../models/index');

const { weight, User } = db;

const { Op } = db.Sequelize;

exports.findAllPublished = (req, res) => {};

// Retrieve all user from the database.
exports.findAll = (req, res) => {};

// Find a single user with an id
exports.findOne = (req, res) => {
  const { id } = req.params;
  console.log('id', id);
  User.findByPk(id, {
    include: [
      {
        model: weight,
        as: 'weights',
      },
    ],
  })
    .then((data) => {
      console.log('data', data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving user.',
      });
    });
};

// Update a user by the id in the request
exports.update = (req, res) => {};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {};

// Delete all user from the database.
exports.deleteAll = (req, res) => {};
