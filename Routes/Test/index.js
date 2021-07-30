const express = require('express');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: The name of user
 *         author:
 *           type: string
 *           description: The book author
 *
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 */

/**
 * @swagger
 * /TestRoute:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/getTestResults', (req, res) => {
  res.send('Hello World');
  console.log('got authentication request here ');
});

router.get('/', (req, res) => {
  res.send('Hello World');
  console.log('got authentication request here ');
});

module.exports = router;
