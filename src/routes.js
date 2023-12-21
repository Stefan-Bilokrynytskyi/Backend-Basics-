'use strict';

const express = require('express');
const { format } = require('date-fns');
const UserController = require('./controllers/UserController.js');
const CategoryController = require('./controllers/CategoryController.js');
const RecordController = require('./controllers/RecordController.js');
const AuthController = require('./controllers/AuthController.js');
const authMiddleWare = require('./middleware/authMiddleware.js');
const { check } = require('express-validator');

let status = 'offline';

const router = express.Router();
router.post(
  '/registration',
  [
    check('username', 'Name of user can not be empty').notEmpty(),
    check('password', 'Password must contain at lest 3 characters').isLength({
      min: 3,
    }),
  ],
  new AuthController().registration
);
router.post('/login', new AuthController().login);
router.get('/users', authMiddleWare, new UserController().getUsers);

router.get('/user/:id', authMiddleWare, new UserController().getUser);
router.delete('/user/:id', authMiddleWare, new UserController().deleteUser);
router.post('/user', authMiddleWare, new UserController().createUser);
router.get(
  '/category/:id',
  authMiddleWare,
  new CategoryController().getCategory
);
router.get(
  '/categories',
  authMiddleWare,
  new CategoryController().getCategories
);
router.delete(
  '/category/:id',
  authMiddleWare,
  new CategoryController().deleteCategory
);
router.post(
  '/category',
  authMiddleWare,
  new CategoryController().createCategory
);
router.get('/record/:id', authMiddleWare, new RecordController().getRecord);
router.delete(
  '/record/:id',
  authMiddleWare,
  new RecordController().deleteRecord
);
router.post('/record', authMiddleWare, new RecordController().createRecord);
router.get('/record', authMiddleWare, new RecordController().getRecords);
router.get('/healthcheck', authMiddleWare, async (req, res) => {
  try {
    status = 'online';
    const today = new Date();
    const date = format(today, 'MMMM dd, yyyy');
    const data = { date, status };

    res.status(200).json(data);
  } catch (error) {
    console.error('Error', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
