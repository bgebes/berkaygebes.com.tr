"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Cpu, Microscope, Library } from 'lucide-react';
import berkayPhoto from '../assets/berkay.png';

export interface HeroData {
  title1: string;
  title2: string;
  title3: string;
  subtitle: string;
  resumeUrl?: string; // Future proofing
}

interface HeroProps {
  data?: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const t1 = data?.title1 || "Berkay";
  const t2 = data?.title2 || "Gebeş";
  const t3 = data?.title3 || "Researcher.";
  const sub = data?.subtitle || "Specialized in Machine Learning, AI, and Image Processing. Currently pursuing academic research with an interest in collaborative projects and innovative industrial proposals.";

  return (
    <section className="container hero-launch-section animate-in">
      <div className="hero-grid-launch">
        <div className="hero-content-main">
          <h1 className="display-title">
            {t1}<br/>
            {t2}<br/>
            <span className="text-secondary-accent">{t3}</span>
          </h1>
          <p className="sub-display">
            {sub}
          </p>
          <div className="hero-cta-group">
            <a href="#contact" onClick={scrollToContact} className="launch-btn primary">
               Collaborate <ChevronRight size={18} />
            </a>
            <Link href="/projects" className="launch-btn secondary">
               Projects
            </Link>
          </div>
        </div>
        
        <div className="hero-visual-portrait">
            <div className="portrait-frame">
               <img src={berkayPhoto.src || berkayPhoto} alt="Berkay Gebeş" className="portrait-img" />
               <div className="portrait-overlay-accent"></div>
            </div>
            
            <div className="floating-cards-wrap">
                <div className="motif-card glass-card top-card">
                   <Cpu size={24} />
                   <div className="card-info">
                      <span className="card-label">PROFESSION</span>
                      <span className="card-value">Computer Engineer</span>
                   </div>
                </div>
                <div className="motif-card glass-card mid-card">
                   <Microscope size={24} />
                   <div className="card-info">
                      <span className="card-label">SPECIALIZATION</span>
                      <span className="card-value">Deep Learning & AI</span>
                   </div>
                </div>
                <div className="motif-card glass-card bottom-card">
                   <Library size={24} />
                   <div className="card-info">
                      <span className="card-label">AFFILIATION</span>
                      <span className="card-value">Hitit University</span>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
