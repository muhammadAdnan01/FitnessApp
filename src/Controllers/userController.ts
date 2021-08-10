import { Request, Response } from 'express';
const model = require('../../models');

exports.findAllPublished = (req: Request, res: Response) => {};

// Retrieve all user from the database.
exports.findAll = async (req: Request, res: Response) => {};

// Find a single user with an id
exports.findOne = async (req: Request, res: Response) => {
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
exports.update = (req: Request, res: Response) => {};

// Delete a user with the specified id in the request
exports.delete = (req: Request, res: Response) => {};

// Delete all user from the database.
exports.deleteAll = (req: Request, res: Response) => {};
