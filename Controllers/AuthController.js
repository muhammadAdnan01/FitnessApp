const { Sequelize, Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const jsonwebtoken = require('jsonwebtoken');
const model = require('../models');

const Controller = {};
console.log('odles', model);
Controller.authenticateUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({
      success: false,
      msg: 'Please Enter Email & Password',
    });
  }
  model.Auth.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    console.log('got user here ======>', user);
    if (user) {
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        res.status(401).send({
          accessToken: null,
          message: 'Invalid  Email OR Password!',
        });
      }
      model.user
        .findOne({
          where: {
            email: req.body.email,
          },
        })
        .then((userInfo) => {
          console.log('userInfo', process.env.JWT_KEY);
          if (userInfo) {
            const token = jwt.encode(userInfo, 'foo');
            const apiToken = jsonwebtoken.sign(
              { id: userInfo.dataValues.id },
              process.env.JWT_KEY,
              {
                expiresIn: 86400, // 24 hours
              }
            );

            // eslint-disable-next-line no-param-reassign
            // delete userInfo.password;

            res.status(200).send({
              success: true,
              token: `JWT${token}`,
              accessToken: apiToken,
              userInfo,
            });
          }
        });
    } else {
      res.status(400).send({
        success: false,
        msg: 'User doesnt exists',
      });
    }
  });
};
Controller.createUser = (req, res) => {
  const {
    email,
    name,
    weight,
    height,
    DOB,
    stepsGoal,
    heartPointsGoal,
    sleepTime,
    awakeTime,
    gender,
    password,
  } = req.body;

  if (!email || !password) {
    res.json({
      success: false,
      msg: 'Please Enter Valid Email & Password',
    });
  } else {
    model.user
      .findOne({
        where: {
          email: req.body.email,
        },
      })
      .then((user) => {
        if (user) {
          res.status(400).send({
            success: false,
            msg: 'Email Already exists',
          });
        } else {
          try {
            model.sequelize
              .sync()
              .then(() =>
                model.user.create({
                  email,
                  name,
                  weight,
                  height,
                  DOB,
                  stepsGoal,
                  heartPointsGoal,
                  sleepTime,
                  awakeTime,
                  gender,
                })
              )
              .then(() => {
                const hashPassword = bcrypt.hashSync(password, 8);
                model.Auth.create({
                  email,
                  password: hashPassword,
                }).then(() => {
                  res.status(200).send(`User Created Sucessfully`);
                });
              });
          } catch (error) {
            console.log('got error here ========>', error);
          }
        }
      });
  }
};

module.exports = Controller;
