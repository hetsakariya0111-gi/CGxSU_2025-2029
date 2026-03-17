import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>હેલો! I'm Het 👋</h2>
            <p>
              I'm a passionate web developer with expertise in modern web technologies.
              I love creating beautiful, functional websites and applications.
            </p>
            <p>
              My journey in web development started 2 years ago, and since then
              I've worked on various projects using React, JavaScript, and other technologies.
            </p>
          </div>
          <div className="about-image">
            <img src="/images/profile.jpg" alt="Het" />
          </div>
        </div>
        
        <div className="education-section">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Bachelor of Computer Applications</h4>
            <p>University Name • 2021-2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;