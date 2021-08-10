import { Request, Response } from 'express';
const model = require('../../models/index');

const Controller: any = {};
function validateCreateRequest(req: Request, res: Response) {
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
Controller.create = async (req: Request, res: Response) => {
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
Controller.findAllPublished = async (req: Request, res: Response) => {
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
Controller.findAll = (req: Request, res: Response) => {};

// Find a single weight with an id
Controller.findOne = (req: Request, res: Response) => {};

// Update a weight by the id in the request
Controller.update = (req: Request, res: Response) => {};

// Delete a weight with the specified id in the request
Controller.delete = (req: Request, res: Response) => {};

// Delete all weight from the database.
Controller.deleteAll = (req: Request, res: Response) => {};

module.exports = Controller;
