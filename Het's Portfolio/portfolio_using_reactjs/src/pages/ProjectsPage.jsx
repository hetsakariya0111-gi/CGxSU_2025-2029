
import React from 'react';
import ProjectCard from '../components/projects/ProjectCard';
// જો default export હોય:
import projects from '../data/projectsData';
// અથવા જો named export હોય:
// import { projects } from '../data/projectsData';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">
            Here are some of my recent works that showcase my skills and experience.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              // OPTION 1: જો ProjectCard individual props લે
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
                live={project.live}
                image={project.image}
              />
              
              // OPTION 2: જો ProjectCard single project prop લે
              // <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;