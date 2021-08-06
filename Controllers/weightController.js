const model = require('../models/index');

const Controller = {};
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
Controller.create = async (req, res) => {
  const { body } = req;
  // validateCreateRequest(req, res);
  const sleepDurationsBody = {
    value: body.value,
    date: body.date,
    time: body.time,
    userID: body.userID || 45,
  };

  try {
    const data = await model.weight.create(sleepDurationsBody);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Some error occurred while creating the Weight.',
    });
  }
};

// Find all published weight
Controller.findAllPublished = async (req, res) => {
  try {
    const data = await model.weight.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving weight.',
    });
  }
};

// Retrieve all weight from the database.
Controller.findAll = (req, res) => {};

// Find a single weight with an id
Controller.findOne = (req, res) => {};

// Update a weight by the id in the request
Controller.update = (req, res) => {};

// Delete a weight with the specified id in the request
Controller.delete = (req, res) => {};

// Delete all weight from the database.
Controller.deleteAll = (req, res) => {};

module.exports = Controller;
