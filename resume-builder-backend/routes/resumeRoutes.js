// routes/resumeRoutes.js
import express from 'express';
import { getSuggestions, saveResume } from '../controllers/suggestionController.js';

const router = express.Router();

router.post('/save', saveResume);
router.post('/suggest', getSuggestions);

export default router;
