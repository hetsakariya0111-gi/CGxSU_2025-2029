import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // ignore clicks on interactive elements
    if (e.target.closest('a,button')) return;
    // go to projects page and focus this project
    navigate(`/projects#project-${project.id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleCardClick(e);
      }}
    >
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-img"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80";
          }}
        />
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
                href={project.demo || project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
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

        {project.stats && (
          <div className="project-stats">
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
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;