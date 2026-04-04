import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaPalette, FaMobile, FaServer } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'React.js', level: 90, icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', level: 85, icon: <FaNodeJs />, color: '#68A063' },
    { name: 'MongoDB', level: 80, icon: <FaDatabase />, color: '#47A248' },
    { name: 'UI/UX Design', level: 75, icon: <FaPalette />, color: '#FF6B6B' },
    { name: 'Mobile Dev', level: 70, icon: <FaMobile />, color: '#4ECDC4' },
    { name: 'Backend', level: 85, icon: <FaServer />, color: '#FFD166' },
  ];

  const experiences = [
    { year: '2022-Present', role: 'Senior Full Stack Developer', company: 'Tech Solutions Inc.' },
    { year: '2020-2022', role: 'Frontend Developer', company: 'Digital Creations' },
    { year: '2019-2020', role: 'Junior Developer', company: 'Startup Hub' },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content">
            {/* Left Column - About Text */}
            <div className="about-text">
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I Build Digital Solutions That Make a Difference
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                With over 3 years of experience in web development, I specialize in creating 
                modern, responsive, and user-friendly applications. My passion lies in solving 
                complex problems with simple, elegant solutions.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge through blog posts and tutorials.
              </motion.p>

              {/* Experience Timeline */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="experience-timeline"
              >
                <h4>Experience</h4>
                <div className="timeline">
                  {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-year">{exp.year}</div>
                      <div className="timeline-content">
                        <h5>{exp.role}</h5>
                        <p>{exp.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="about-skills"
            >
              <h4>My Skills</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-item"
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="skill-progress"
                        style={{ background: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="tech-stack"
              >
                <h4>Tech Stack</h4>
                <div className="tech-tags">
                  {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 
                    'PostgreSQL', 'AWS', 'Docker', 'Git', 'Redux', 'Tailwind'].map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;