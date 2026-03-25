import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Video, FileText, Code, ExternalLink, Download, Play, Github, Layout } from 'lucide-react';

const DEFAULT_CATEGORIES = [
    {
      label: "Scientific Lectures & Videos",
      iconName: "Video",
      resources: [
        { title: "Deep Learning for Vision Systems", desc: "Comprehensive series explaining CNN architectures.", link: "#", tags: ["Deep Learning", "Vision"] },
        { title: "Smart City Infrastructure Seminar", desc: "Guest lecture on future mobility.", link: "#", tags: ["ITS", "Urban Planning"] }
      ]
    },
    {
      label: "Research Papers & Documentation",
      iconName: "FileText",
      resources: [
        { title: "ITS Whiteboard", desc: "Full technical documentation for the SHATRIP project.", link: "#", tags: ["SHATRIP", "ITS"] },
        { title: "Android Mobile App Curriculum", desc: "Complete 13-week course materials.", link: "#", tags: ["Android", "Course"] }
      ]
    },
    {
      label: "Source Code & Technical Tools",
      iconName: "Code",
      resources: [
        { title: "Real-time Object Detection", desc: "Ready-to-use Python repository.", link: "#", tags: ["Python", "OpenCV"] },
        { title: "System Intelligence Framework", desc: "Custom library built for distributed AI tasks.", link: "#", tags: ["Backend", "Core"] }
      ]
    }
  ];

import contentData from '../../../src/data/content.json';

export default function ContentsPage() {
  const categories = contentData.contents.categories?.length ? contentData.contents.categories : DEFAULT_CATEGORIES;
  const config = contentData.contents.config || null;

  const getIcon = (name: string, size: number) => {
    const IconComponent = (LucideIcons as any)[name] || LucideIcons.ExternalLink;
    return <IconComponent size={size} />;
  };

  const title1 = config?.title1 || "Scientific";
  const title2 = config?.title2 || "Resources Hub.";
  const subtitle = config?.subtitle || "An optimized compilation of technical documentation, research papers, and academic resources.";

  return (
    <div className="inner-page-lansman animate-in">
      <div className="container">

        <div className="contents-stack-lansman">
          {categories.map((cat: any, i: number) => (
            <div key={i} className="content-category-group">
                <header className="category-header">
                   <div className="category-label-wrap">
                      {getIcon(cat.iconName, 20)}
                      <span className="category-label-text">{cat.label}</span>
                   </div>
                   <div className="header-line"></div>
                </header>
                
                <div className="category-items-grid">
                   {(cat.resources || []).map((item: any, j: number) => (
                     <div key={j} className="resource-card-modern">
                        <div className="resource-info">
                           <h3 className="resource-title">{item.title}</h3>
                           <p className="resource-desc text-muted">{item.desc}</p>
                           <div className="resource-tags">
                              {item.tags.map((tag: string, t: number) => (
                                <span key={t} className="resource-tag-pill">{tag}</span>
                              ))}
                           </div>
                        </div>
                        <a href={item.link} className="resource-action-link">
                           <ExternalLink size={20} />
                        </a>
                     </div>
                   ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
