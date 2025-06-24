// suggestionController.js
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';
import Resume from '../models/Resume.js';

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// ✅ Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 🧠 AI Suggestion Controller
export const getSuggestions = async (req, res) => {
  const { name, email, summary, education, experience, skills } = req.body;

  const fullContent = `
Name: ${name}
Email: ${email}
Summary: ${summary}
Education: ${education}
Experience: ${experience}
Skills: ${skills}
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant that gives improvement suggestions for resume content.',
        },
        {
          role: 'user',
          content: fullContent,
        },
      ],
      max_tokens: 300,
    });

    const suggestion = response.choices[0].message.content;
    res.json({ suggestions: suggestion }); // ✅ NOTE: 'suggestions'
  } catch (error) {
    console.error('❌ Error in getSuggestions:', error.message);
    res.status(500).json({ error: 'Failed to get suggestions' });
  }
};

// 💾 Save Resume Controller
export const saveResume = async (req, res) => {
  const { name, email, resumeData } = req.body;

  try {
    const newResume = new Resume({ name, email, resumeData });
    await newResume.save();
    res.json({ message: 'Resume saved successfully' });
  } catch (error) {
    console.error('❌ Error in saveResume:', error.message);
    res.status(500).json({ error: 'Failed to save resume' });
  }
};
