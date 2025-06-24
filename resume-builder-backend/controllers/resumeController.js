import Resume from '../models/Resume.js';

export const saveResume = async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.status(201).json({ message: 'Resume saved' });
  } catch (error) {
    console.error('Save error:', error);
    res.status(500).json({ error: 'Save failed' });
  }
};


// new file add ki h last m