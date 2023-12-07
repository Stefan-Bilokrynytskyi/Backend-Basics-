'use strict';

const express = require('express');
const { format } = require('date-fns');
const UserController = require('./users/UserController.js');
const CategoryController = require('./category/CategoryController.js');
const RecordController = require('./record/RecordController.js');

let status = 'offline';

const router = express.Router();
router.get('/users', new UserController().getUsers);

router.get('/user/:id', new UserController().getUser);
router.delete('/user/:id', new UserController().deleteUser);
router.post('/user', new UserController().createUser);
router.get('/category/:id', new CategoryController().getCategory);
router.get('/categories', new CategoryController().getCategories);
router.delete('/category/:id', new CategoryController().deleteCategory);
router.post('/category', new CategoryController().createCategory);
router.get('/record/:id', new RecordController().getRecord);
router.delete('/record/:id', new RecordController().deleteRecord);
router.post('/record', new RecordController().createRecord);
router.get('/record', new RecordController().getRecords);
router.get('/healthcheck', async (req, res) => {
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
