'use client'

import resumeData from '../resume_data.json';

export default function PrintResume() {
  return (
    <>
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-resume, .print-resume * {
            visibility: visible;
          }
          .print-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
            margin: 0;
          }
          
          .contact-item a {
            color: inherit !important;
            text-decoration: none !important;
          }
        }
        
        .print-resume {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 8.5in;
          margin: 0 auto;
          padding: 0.5in;
          background: white;
        }
        
        .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 3px solid #2980b9;
          padding-bottom: 20px;
        }
        
        .name {
          font-size: 28px;
          font-weight: bold;
          color: #7f8c8d;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .title {
          font-size: 16px;
          color: #2980b9;
          font-weight: 600;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .contact-info {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          font-size: 12px;
          color: #7f8c8d;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .section {
          margin-bottom: 25px;
        }
        
        .section-title {
          font-size: 16px;
          font-weight: bold;
          color: #7f8c8d;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 5px;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .summary {
          font-size: 12px;
          line-height: 1.6;
          text-align: justify;
          color: #333;
        }
        
        .experience-item {
          margin-bottom: 20px;
        }
        
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }
        
        .job-title {
          font-weight: bold;
          font-size: 14px;
          color: #7f8c8d;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        
        .company {
          font-weight: 600;
          color: #2980b9;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        
        .dates {
          font-size: 12px;
          color: #2980b9;
          white-space: nowrap;
          font-weight: 500;
        }
        
        .responsibilities {
          margin-left: 0;
        }
        
        .responsibilities ul {
          list-style: none;
          padding-left: 0;
        }
        
        .responsibilities li {
          font-size: 11px;
          line-height: 1.5;
          margin-bottom: 4px;
          color: #333;
          position: relative;
          padding-left: 15px;
        }
        
        .responsibilities li:before {
          content: "•";
          color: #2980b9;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .skill-tag {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          padding: 3px 8px;
          border-radius: 3px;
          font-size: 10px;
          color: #7f8c8d;
          font-weight: 500;
        }
        
        .education-item {
          margin-bottom: 15px;
        }
        
        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 5px;
        }
        
        .degree {
          font-weight: 600;
          color: #7f8c8d;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        
        .institution {
          color: #2980b9;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        
        .education-dates {
          font-size: 11px;
          color: #2980b9;
          font-weight: 500;
        }
        
        .publication-item {
          margin-bottom: 12px;
        }
        
        .publication-title {
          font-weight: 600;
          color: #2980b9;
          font-size: 12px;
          margin-bottom: 2px;
        }
        
        .publication-event {
          font-style: italic;
          color: #7f8c8d;
          font-size: 11px;
          margin-bottom: 2px;
        }
        
        .publication-authors {
          color: #333;
          font-size: 11px;
        }
      `}</style>
      
      <div className="print-resume">
        {/* Header */}
        <div className="header">
          <div className="name">{resumeData.about.name}</div>
          <div className="title">Data Engineer & Architect</div>
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <a href={`mailto:${resumeData.about.contact.email}`}>{resumeData.about.contact.email}</a>
            </div>
            <div className="contact-item">
              <span>📱</span>
              <a href={`tel:${resumeData.about.contact.phone}`}>{resumeData.about.contact.phone}</a>
            </div>
            <div className="contact-item">
              <span>🌐</span>
              <a href={resumeData.about.contact.social.linkedin}>LinkedIn</a>
            </div>
            <div className="contact-item">
              <span>💻</span>
              <a href={resumeData.about.contact.social.github}>GitHub</a>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="section">
          <div className="section-title">Professional Summary</div>
          <div className="summary">{resumeData.about.summary}</div>
        </div>

        {/* Experience */}
        <div className="section">
          <div className="section-title">Professional Experience</div>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="job-header">
                <div>
                  <div className="job-title">{job.title}</div>
                  <div className="company">{job.company}</div>
                </div>
                <div className="dates">{job.dates}</div>
              </div>
              <div className="responsibilities">
                <ul>
                  {job.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="section">
          <div className="section-title">Technical Skills</div>
          <div className="skills-container">
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="skill-tag">{skill}</div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="section">
          <div className="section-title">Education</div>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <div>
                  <div className="degree">{edu.degree}</div>
                  <div className="institution">{edu.institution}</div>
                </div>
                <div className="education-dates">{edu.dates}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="section">
          <div className="section-title">Publications & Presentations</div>
          {resumeData.publications_and_presentations.map((pub, index) => (
            <div key={index} className="publication-item">
              <div className="publication-title">{pub.title}</div>
              <div className="publication-event">{pub.event}</div>
              <div className="publication-authors">{pub.authors.join(', ')}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}