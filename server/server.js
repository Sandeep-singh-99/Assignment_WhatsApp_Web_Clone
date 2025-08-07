import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { ConnectDB } from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());


ConnectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
