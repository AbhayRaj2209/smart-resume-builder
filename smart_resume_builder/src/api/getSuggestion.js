// src/api/getSuggestions.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/resume'; // backend URL

export const getSuggestions = async (resumeData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/suggestions`, resumeData);
    return res.data; // returns improved suggestions
  } catch (err) {
    console.error('Error fetching suggestions:', err);
    throw err;
  }
};

export const saveResume = async (resumeData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/save`, resumeData);
    return res.data; // confirmation or saved record
  } catch (err) {
    console.error(' Error saving resume:', err);
    throw err;
  }
};
