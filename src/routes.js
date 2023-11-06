'use strict';

import express from 'express';
import { format } from 'date-fns';
import UserController from './users/UserController.js';

let status = 'offline';

const router = express.Router();
router.get('/users', new UserController().getUsers);

router.get('/user/:id', new UserController().getUser);
router.delete('/user/:id', new UserController().deleteUser);
export default router;
