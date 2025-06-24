// src/components/ResumePreview.jsx
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import '../styles/ResumePreview.css';

const ResumePreview = ({ resumeData, setShowPreview }) => {
  const componentRef = useRef();

  const handleDownload = () => {
    const element = componentRef.current;
    const opt = {
      margin:       0.5,
      filename:     `${resumeData.name || 'resume'}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="resume-preview-wrapper">
      <div ref={componentRef} className="resume-preview">
        <h2>{resumeData.name}</h2>
        <p><strong>Email:</strong> {resumeData.email}</p>

        <h3>Summary</h3>
        <p>{resumeData.summary}</p>

        <h3>Education</h3>
        <p>{resumeData.education}</p>

        <h3>Experience</h3>
        <p>{resumeData.experience}</p>

        <h3>Skills</h3>
        <p>{resumeData.skills}</p>
      </div>

      <div className="preview-buttons">
        <button onClick={() => setShowPreview(false)}>Back to Edit</button>
        <button onClick={handleDownload}>Download PDF</button>
      </div>
    </div>
  );
};

export default ResumePreview;
