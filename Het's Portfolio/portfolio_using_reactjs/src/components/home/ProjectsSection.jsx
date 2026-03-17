import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { projects } from '../../data/projectsData.js';
// import React from 'react';
import ProjectCard from '../projects/ProjectCard';
import projects from '../../data/projectsData'; 

const ProjectsSection = () => {
  const featuredProjects = projects.slice(0, 3); // Show only 3 on home page

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Here are some of my recent works that showcase my skills and experience.
            </p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <div className="project-image">
                  <div className="project-overlay">
                    <div className="project-overlay-content">
                      <div className="project-links">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaGithub /> Code
                        </a>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-img"
                  />
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.featured && (
                      <span className="featured-badge">
                        <FaStar /> Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  <div className="project-stats">
                    {project.stats && (
                      <>
                        <span className="stat">
                          <span className="stat-number">{project.stats.commits}+</span>
                          <span className="stat-label">Commits</span>
                        </span>
                        <span className="stat">
                          <span className="stat-number">{project.stats.stars}</span>
                          <span className="stat-label">Stars</span>
                        </span>
                        <span className="stat">
                          <span className="stat-number">{project.stats.contributors}</span>
                          <span className="stat-label">Contributors</span>
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-3"
          >
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;