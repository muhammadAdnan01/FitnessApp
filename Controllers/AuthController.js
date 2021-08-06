const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const jsonwebtoken = require('jsonwebtoken');
const model = require('../models');

const Controller = {};
Controller.authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({
      success: false,
      msg: 'Please Enter Email & Password',
    });
  }

  try {
    const user = await model.Auth.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        res.status(401).send({
          accessToken: null,
          message: 'Invalid  Email OR Password!',
        });
      }
      const userInfo = await model.user.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (userInfo) {
        const token = jwt.encode(userInfo, 'foo');
        const apiToken = jsonwebtoken.sign(
          { id: userInfo.dataValues.id },
          process.env.JWT_KEY,
          {
            expiresIn: 86400, // 24 hours
          }
        );

        res.status(200).send({
          success: true,
          token: `JWT${token}`,
          accessToken: apiToken,
          userInfo,
        });
      }
    } else {
      res.status(400).send({
        success: false,
        msg: 'User doesnt exists',
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      msg: error,
    });
  }
};

Controller.createUser = async (req, res) => {
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
    const user = await model.user.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      res.status(400).send({
        success: false,
        msg: 'Email Already exists',
      });
    } else {
      try {
        model.sequelize.sync();
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
        });
        const hashPassword = bcrypt.hashSync(password, 8);
        model.Auth.create({
          email,
          password: hashPassword,
        });
        res.status(200).send(`User Created Sucessfully`);
      } catch (error) {
        res.status(500).send({
          success: false,
          errormsg: error,
        });
      }
    }
  }
};

module.exports = Controller;
