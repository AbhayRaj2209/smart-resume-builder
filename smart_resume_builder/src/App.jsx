// src/App.jsx
import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './styles/App.css';

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="app-container">
      <h1>Smart Resume Builder</h1>
      {!showPreview ? (
        <ResumeForm
          setResumeData={setResumeData}
          setShowPreview={setShowPreview}
        />
      ) : (
        <ResumePreview
          resumeData={resumeData}
          setShowPreview={setShowPreview}
        />
      )}
    </div>
  );
};

export default App;
