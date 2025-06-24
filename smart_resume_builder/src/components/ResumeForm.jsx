import React, { useState } from 'react';
import '../styles/ResumeForm.css';
import axios from 'axios';

const ResumeForm = ({ setResumeData, setShowPreview }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    summary: '',
    education: '',
    experience: '',
    skills: '',
  });

  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResumeData(form);
    setShowPreview(true);
  };

  const getSuggestions = async () => {
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/api/resume/suggestions', {
        ...form,
      });
      setSuggestions(res.data.suggestions);
    } catch (error) {
      console.error(' Error getting suggestions:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveResume = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/resume/save', {
        ...form,
        suggestions,
      });
      alert(' Resume Saved to DB!');
    } catch (error) {
      console.error('Error saving resume:', error);
    }
  };

  return (
    <form className="resume-form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input name="name" value={form.name} onChange={handleChange} required />

      <label>Email</label>
      <input name="email" value={form.email} onChange={handleChange} required />

      <label>Summary</label>
      <textarea name="summary" value={form.summary} onChange={handleChange} />

      <label>Education</label>
      <textarea name="education" value={form.education} onChange={handleChange} />

      <label>Experience</label>
      <textarea name="experience" value={form.experience} onChange={handleChange} />

      <label>Skills</label>
      <input name="skills" value={form.skills} onChange={handleChange} />

      <button type="submit">Preview Resume</button>

      <button type="button" onClick={getSuggestions}>
        {loading ? 'Getting Suggestions...' : 'Get AI Suggestions'}
      </button>

      <button type="button" onClick={saveResume}>Save Resume to DB</button>

      {suggestions && (
        <div className="suggestions-box">
          <h4>AI Suggestions:</h4>
          <p>{suggestions}</p>
        </div>
      )}
    </form>
  );
};

export default ResumeForm; 
