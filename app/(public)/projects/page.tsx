import React from 'react';
import { Github, Globe, ArrowRight } from 'lucide-react';

const DEFAULT_PROJECTS = [
    {
      title: "SHATRIP - Smart City Hub",
      category: "Intelligent Transportation",
      tech: ["Python", "OpenCV", "Deep Learning"],
      desc: "A comprehensive multidisciplinary traffic management platform focusing on autonomous signal control and data orchestration.",
      gh: "#",
      demo: "#"
    },
    {
      title: "CMSS - Core Management System",
      category: "System Engineering",
      tech: ["Node.js", "MVC", "Firebase"],
      desc: "Robust architectural core for managing municipal data and smart infrastructure services in real-time.",
      gh: "#",
      demo: "#"
    },
    {
      title: "EdgeVision Toolkit",
      category: "Computer Vision",
      tech: ["Java", "TensorFlow Lite", "Android"],
      desc: "Lightweight developers toolkit for deploying pre-trained vision models directly onto Android mobile sensors.",
      gh: "#",
      demo: "#"
    }
  ];

import contentData from '../../../src/data/content.json';

export default function ProjectsPage() {
  const projects = contentData.projects.projects?.length ? contentData.projects.projects : DEFAULT_PROJECTS;
  const config = contentData.projects.config || null;

  const title1 = config?.title1 || "Professional";
  const title2 = config?.title2 || "Portfolio Grid.";
  const subtitle = config?.subtitle || "A curated collection of research implementations, system architectures, and scientific computing projects.";

  return (
    <div className="inner-page-lansman animate-in">
      <div className="container">
        
        <div className="projects-launch-grid">
          {projects.map((proj: any, i: number) => (
            <div key={i} className="project-launch-card">
              <div className="project-card-header">
                <span className="project-category-tag">{proj.category}</span>
                <div className="proj-links-mini">
                   {proj.gh && proj.gh !== '#' && (
                     <a href={proj.gh} target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
                   )}
                   {proj.demo && proj.demo !== '#' && (
                     <a href={proj.demo} target="_blank" rel="noopener noreferrer"><Globe size={18} /></a>
                   )}
                </div>
              </div>
              <h2 className="project-launch-title">{proj.title}</h2>
              <p className="project-launch-desc">{proj.desc}</p>
              <div className="project-tech-stack">
                 {(((proj as any).tech && typeof (proj as any).tech === 'string' ? (proj as any).tech.split(',') : ((proj as any).tech || []))).map((t: string, j: number) => (
                   t.trim() ? <span key={j} className="tech-pill-tag">{t.trim()}</span> : null
                 ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
