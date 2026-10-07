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

  return (
    <div className="inner-page-lansman animate-in">
      <div className="container">
        <header className="page-header-minimal">
          <h1 className="page-title-display">Portfolio.</h1>
          <p className="page-sub-display">
            Projects, source code, publications, and technical resources.
          </p>
        </header>

        <section className="portfolio-section">
          <div className="portfolio-group">
            <header className="category-header portfolio-group-header">
              <div className="category-label-wrap">
                <FolderGit2 size={20} />
                <h2 className="portfolio-category-title">Projects</h2>
              </div>
              <div className="header-line" />
              <span className="category-count">{projects.length} projects</span>
            </header>
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
        </section>

        <section className="portfolio-section portfolio-resources">
          <div className="contents-stack-lansman">
            {categories.map((category: any, index: number) => (
              <div key={index} className="content-category-group">
                <header className="category-header">
                  <div className="category-label-wrap">
                    {getIcon(category.iconName, 20)}
                    <h2 className="portfolio-category-title">{category.label}</h2>
                  </div>
                  <div className="header-line" />
                  <span className="category-count">{category.resources?.length || 0} {category.label.toLowerCase()}</span>
                </header>
                <div className="category-items-grid">
                  {(category.resources || []).map((resource: any, resourceIndex: number) => (
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
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
