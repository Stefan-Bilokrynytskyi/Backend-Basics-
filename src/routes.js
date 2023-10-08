'use strict';

let status = 'offline';
const express = require('express');
const router = express.Router();
const { format } = require('date-fns');

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

module.exports = router;
