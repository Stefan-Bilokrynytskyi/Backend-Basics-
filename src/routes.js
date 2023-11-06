'use strict';

import express from 'express';
import { format } from 'date-fns';
import UserController from './users/UserController.js';
import CategoryController from './category/CategoryController.js';

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
export default router;
