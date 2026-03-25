import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Target, ArrowUpRight, Sparkles, Binary, Brain, Microscope, MessageSquare } from 'lucide-react';

// Default Fallback Data
const DEFAULT_DOMAINS = [
  { title: "Machine Learning", iconName: "Brain", desc: "Developing advanced stochastic models for predictive analysis." },
  { title: "Computer Vision", iconName: "Target", desc: "Real-time object detection and spatial awareness algorithms." },
  { title: "Deep Learning", iconName: "Binary", desc: "Neural network optimizations for complex dataset processing." },
  { title: "Natural Language Processing", iconName: "MessageSquare", desc: "Architecting systems for semantic understanding and linguistic data processing." }
];

import contentData from '../../../src/data/content.json';

export default function LabPage() {
  const domains = contentData.lab.domains?.length ? contentData.lab.domains : DEFAULT_DOMAINS;
  const config = contentData.lab.config || null;
  
  const loading = false;

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Sparkles;
    return <IconComponent size={24} />;
  };

  const title1 = config?.title1 || "Scientific";
  const title2 = config?.title2 || "Research Hub.";
  const subtitle = config?.subtitle || "A multidisciplinary research environment focused on advancing System Intelligence, Machine Learning, and Innovative Academic Solutions.";

  return (
    <div className={`inner-page-lansman animate-in ${loading ? 'loading' : ''}`}>
      <div className="container">
        
        {/* Lab Hero */}
        <header className="lab-hero-lansman">
           <div className="lab-intro-content">
              <h1 className="lab-display-title">{title1}<br/>{title2}</h1>
              <p className="lab-sub-display">{subtitle}</p>
           </div>
           <div className="lab-icon-motif">
              <Microscope size={120} strokeWidth={0.5} className="motif-glow" />
           </div>
        </header>

        {/* Research Domains - Clean Grid */}
        <section className="lab-section">
           <div className="lab-bento-grid">
              {domains.map((dom: any, i: number) => (
                <div key={i} className="lab-bento-card">
                   <div className="bento-icon-wrap">{getIcon(dom.iconName)}</div>
                   <h3 className="bento-title">{dom.title}</h3>
                   <p className="bento-desc">{dom.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Recruitment Section */}
        <section className="lab-recruitment-wrap">
           <div className="lab-bento-card recruitment-hero-card dark-card">
              <div className="recruitment-main-content">
                 <div className="bento-icon-wrap active-icon"><Sparkles size={24} /></div>
                 <div className="recruitment-text">
                    <h3 className="bento-title highlight-text">Join the Laboratory.</h3>
                    <p className="bento-desc text-muted-blue">
                       We are actively seeking motivated students and researchers for collaborative projects. 
                    </p>
                    <a href={`mailto:lab@berkaygebes.com.tr`} className="bento-apply-link-premium">
                       lab@berkaygebes.com.tr <ArrowUpRight size={18} />
                    </a>
                 </div>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
}
