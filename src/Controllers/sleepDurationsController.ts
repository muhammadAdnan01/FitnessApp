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
Controller.create = (req: Request, res: Response) => {
  const { body } = req;
  validateCreateRequest(req, res);
  const sleepDurationsBody = {
    sleepTime: body.sleepTime,
    awakeTime: body.awakeTime,
    date: body.date,
    userID: body.userID || 45,
  };
  model.SleepDurations.create(sleepDurationsBody)
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the HeartRate.',
      });
    });
};

// Find all published Sleep Durations
Controller.findAllPublished = async (req: Request, res: Response) => {
  try {
    const data = model.SleepDurations.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        'Some error occurred while retrieving Sleep Durations.',
    });
  }
};

// Retrieve all Sleep Durations from the database.
Controller.findAll = (req: Request, res: Response) => {};

// Find a single Sleep Durations with an id
Controller.findOne = (req: Request, res: Response) => {};

// Update a Sleep Durations by the id in the request
Controller.update = (req: Request, res: Response) => {};

// Delete a Sleep Durations with the specified id in the request
Controller.delete = (req: Request, res: Response) => {};

// Delete all Sleep Durations from the database.
Controller.deleteAll = (req: Request, res: Response) => {};

module.exports = Controller;
