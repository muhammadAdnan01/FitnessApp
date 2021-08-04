const express = require('express');
const { Sequelize, Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const jsonwebtoken = require('jsonwebtoken');

const sequelize = new Sequelize('todo_database', 'postgres', '1234', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});
const User = require('./Model/User')(sequelize, Sequelize);

const router = express.Router();

/**
 * @swagger
 * components:

 *   schemas:
 *     UserAuthenticate:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: user email
 *           value : adnan@adnan.com
 *         password:
 *           type: string
 *           description: user password
 *
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: user Authenticate
 */

/**
 * @swagger
 * /auth/authenticate:
 *   post:
 *     summary: Authenticate User
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: user data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserAuthenticate'
 */
router.post('/authenticate', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({
      success: false,
      msg: 'Please Enter Email & Password',
    });
  }
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        res.status(401).send({
          accessToken: null,
          message: 'Invalid  Email OR Password!',
        });
      }
      const token = jwt.encode(user, 'foo');
      const apiToken = jsonwebtoken.sign(
        { id: user.dataValues.id },
        process.env.JWT_KEY,
        {
          expiresIn: 86400, // 24 hours
        }
      );

      // eslint-disable-next-line no-param-reassign
      delete user.password;

      res.status(200).send({
        success: true,
        token: `JWT${token}`,
        accessToken: apiToken,
        user,
      });
    } else {
      res.status(400).send({
        success: false,
        msg: 'User doesnt exists',
      });
    }
    console.log('got user here ====>', user.dataValues.username);
  });
});

router.post('/signup', (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password) {
    res.json({
      success: false,
      msg: 'Please Enter Valid Email & Password',
    });
  } else {
    const hashPassword = bcrypt.hashSync(password, 8);

    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          success: false,
          msg: 'Email Already exists',
        });
      } else {
        sequelize
          .sync()
          .then(() =>
            User.create({
              username: firstName,
              email,
              password: hashPassword,
            })
          )
          .then(() => {
            res.status(200).send(`User Created Sucessfully`);
          });
      }
    });
  }
});
module.exports = router;
