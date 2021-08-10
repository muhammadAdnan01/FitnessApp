import { Request, Response } from 'express';
const model = require('../../models/index');

// eslint-disable-next-line import/order
const moment = require('moment');

const Controller: any = {};

function validateCreateRequest(req: Request, res: Response) {
  const { body } = req;
  console.log('request', req.body);
  if (!body) {
    res.status(400).send({
      message: 'request body is required',
    });
  }
  if (!body.systolic) {
    res.status(400).send({
      message: 'Systolic is Required',
    });
  }
  if (!body.diastolic) {
    res.status(400).send({
      message: 'diastolic is Required',
    });
  }
  if (!body.date || !body.time) {
    res.status(400).send({
      message: 'Date Time is Required',
    });
  }
}

// Create and Save a new HeartRate
Controller.create = async (req: Request, res: Response) => {
  const { body } = req;
  validateCreateRequest(req, res);
  const heartRateBody = {
    Systolic: body.systolic,
    diastolic: body.diastolic,
    date: body.date,
    time: body.time,
    userID: body.UserID || 23,
  };

  try {
    const data = await model.HeartRate.create(heartRateBody);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        'Some error occurred while retrieving Sleep Durations.',
    });
  }
  // Save HeartRate in the database
};

// Find all published HeartRates
Controller.findAllPublished = (req: Request, res: Response) => {
  model.HeartRate.findAll()
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving HeartRates.',
      });
    });
};

// Retrieve all HeartRates from the database.
Controller.findAll = (req: Request, res: Response) => {};

// Find a single HeartRate with an id
Controller.findOne = (req: Request, res: Response) => {};

// Update a HeartRate by the id in the request
Controller.update = (req: Request, res: Response) => {};

// Delete a HeartRate with the specified id in the request
Controller.delete = (req: Request, res: Response) => {};

// Delete all HeartRates from the database.
Controller.deleteAll = (req: Request, res: Response) => {};
module.exports = Controller;
