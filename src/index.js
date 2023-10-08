'use strict';

import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import router from './routes.js';
config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
