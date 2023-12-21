'use strict';

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const generateAccessToken = (id) => {
  const payload = {
    id,
  };
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
};

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: 'Error during registration', errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ where: { username } });
      if (candidate) {
        return res
          .status(400)
          .json({ message: 'User with this name already exists' });
      }
      const hashPassword = bcrypt.hashSync(password, 7);

      const user = await User.create({ username, password: hashPassword });

      return res.json({ username, password });
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res
          .status(400)
          .json({ message: `User ${username} is not found` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: `Invalid password` });
      }
      const token = generateAccessToken(user.id);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' });
    }
  }
}

module.exports = AuthController;
