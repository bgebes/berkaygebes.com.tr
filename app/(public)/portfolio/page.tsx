'use client';

import { useState } from 'react';
import { ArrowRight, FolderGit2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import contentData from '../../../src/data/content.json';

const DEFAULT_PROJECTS = [
  {
    title: 'SHATRIP - Smart City Hub',
    category: 'Intelligent Transportation',
    tech: ['Python', 'OpenCV', 'Deep Learning'],
    desc: 'A comprehensive multidisciplinary traffic management platform focusing on autonomous signal control and data orchestration.',
    gh: '#',
    demo: '#',
  },
];

const DEFAULT_CATEGORIES = [
  {
    label: 'Source Code',
    iconName: 'Code',
    resources: [],
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('projects');
  const projects = contentData.projects.projects?.length
    ? contentData.projects.projects
    : DEFAULT_PROJECTS;
  const categories = contentData.contents.categories?.length
    ? contentData.contents.categories
    : DEFAULT_CATEGORIES;
  const getIcon = (name: string, size: number) => {
    const IconComponent = (LucideIcons as any)[name] || LucideIcons.ExternalLink;
    return <IconComponent size={size} />;
  };
  const selectedCategory = categories.find((category: any) => category.label.trim() === activeCategory);

  return (
    <div className="inner-page-lansman animate-in">
      <div className="container">
        <header className="page-header-minimal">
          <h1 className="page-title-display">Portfolio.</h1>
          <p className="page-sub-display">
            Projects, source code, publications, and technical resources.
          </p>
        </header>

        <section className="portfolio-section portfolio-resources">
          <nav className="portfolio-category-tabs" aria-label="Portfolio categories">
            <button
              type="button"
              className={`portfolio-category-tab ${activeCategory === 'projects' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('projects')}
              aria-selected={activeCategory === 'projects'}
            >
              <FolderGit2 size={20} />
              <span>Projects</span>
              <small>{projects.length}</small>
            </button>
            {categories.map((category: any, index: number) => {
              const categoryKey = category.label.trim();
              return (
                <button
                  type="button"
                  key={index}
                  className={`portfolio-category-tab ${activeCategory === categoryKey ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(categoryKey)}
                  aria-selected={activeCategory === categoryKey}
                >
                  {getIcon(category.iconName, 20)}
                  <span>{category.label}</span>
                  <small>{category.resources?.length || 0}</small>
                </button>
              );
            })}
          </nav>

          {activeCategory === 'projects' ? (
            <div className="portfolio-tab-content">
              <div className="projects-launch-grid">
                {projects.map((project: any, index: number) => (
                  <article key={index} className="project-launch-card">
                    <h3 className="project-launch-title">{project.title}</h3>
                    <p className="project-launch-desc">{project.desc}</p>
                    <div className="project-tech-stack">
                      {(Array.isArray(project.tech) ? project.tech : String(project.tech || '').split(',')).map((technology: string, techIndex: number) =>
                        technology.trim() ? <span key={techIndex} className="tech-pill-tag">{technology.trim()}</span> : null
                      )}
                    </div>
                    <div className="portfolio-card-actions">
                      <a
                        href={project.gh && project.gh !== '#' ? project.gh : project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-card-link"
                        aria-label={`Go to ${project.title}`}
                      >
                        Visit <ArrowRight size={16} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : selectedCategory ? (
            <div className="portfolio-tab-content content-category-group">
              <div className="category-items-grid">
                {(selectedCategory.resources || []).map((resource: any, resourceIndex: number) => (
                  <a key={resourceIndex} href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-card-modern">
                    <div className="resource-info">
                      <h3 className="resource-title">{resource.title}</h3>
                      <p className="resource-desc text-muted">{resource.desc}</p>
                      <div className="resource-tags">
                        {(resource.tags || []).map((tag: string, tagIndex: number) => (
                          <span key={tagIndex} className="resource-tag-pill">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <span className="resource-action-link" aria-label={`Go to ${resource.title}`}>
                      <span>Visit</span>
                      <ArrowRight size={18} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}
