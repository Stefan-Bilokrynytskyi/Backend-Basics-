'use strict';

import express from 'express';
import { format } from 'date-fns';

let status = 'offline';

const router = express.Router();
router.get('/healthcheck', async (req, res) => {
  try {
    status = 'online';
    const today = new Date();
    const date = format(today, 'MMMM dd, yyyy');
    const data = { date, status };
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
