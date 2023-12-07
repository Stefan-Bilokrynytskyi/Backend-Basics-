'use strict';

const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const router = require('./routes.js');
config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
