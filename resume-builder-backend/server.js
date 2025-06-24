// server.js
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file manually
dotenv.config({ path: path.resolve(__dirname, '.env') });
console.log("MONGO_URI from env:", process.env.MONGO_URI);


console.log("Loaded OPENAI_API_KEY:", process.env.OPENAI_API_KEY);

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import resumeRoutes from './routes/resumeRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/resume', resumeRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error(' Failed to connect to MongoDB', err);
});
