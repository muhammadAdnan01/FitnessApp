const model = require('../models');

exports.findAllPublished = (req, res) => {};

// Retrieve all user from the database.
exports.findAll = async (req, res) => {};

// Find a single user with an id
exports.findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await model.user.findByPk(id);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving user.',
    });
  }
};

// Update a user by the id in the request
exports.update = (req, res) => {};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {};

// Delete all user from the database.
exports.deleteAll = (req, res) => {};
