import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "SHATRIP",
      description: "A research initiative in the field of intelligent transportation supported by the Ondokuz Mayıs University BAP unit. The project focuses on promoting shared mobility and optimizing public transportation usage through smart algorithms and data analysis.",
      tags: ["Intelligent Transportation", "Shared Mobility", "Public transport", "BAP-Supported"],
    },
    {
      title: "CMSS",
      description: "Conference Management and Smart Systems project where I served as both the project leader and mentor. The initiative aims to enhance participant interaction and streamline management processes using smart, multidisciplinary solutions.",
      tags: ["Smart Systems", "Management", "Leadership", "Mentoring"],
    }
  ];

  return (
    <section id="laboratuvar" className="section projects-section">
      <div className="container">
        <h2 className="section-title">research & laboratory</h2>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
