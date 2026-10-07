import React from 'react';
import { ArrowUpRight, Mail, Linkedin, Github, Sparkles } from 'lucide-react';

interface ContactProps {
  data?: any;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const email = data?.extra1 || "contact@berkaygebes.com.tr";
  const linkedin = data?.extra2 || "https://linkedin.com/in/berkay-gebes";
  const github = data?.extra3 || "https://github.com/bgebes";
  const title1 = data?.title1 || "Connect & Build";
  const title2 = data?.title2 || "Have a research proposal? Let's collaborate.";
  const status = data?.subtitle || "Open to scientific projects and technical collaborations.";

  return (
    <section id="contact" className="contact-innovative">
      <div className="container">
        <div className="contact-grid-modern">
          
          <div className="contact-intro-wrap">
            <div className="contact-intro">
              <span className="label-accent">{title1}</span>
              <h2 className="contact-hero-text">
                {title2}
              </h2>
              <div className="contact-status-small">
                {status}
              </div>
            </div>
            <div className="contact-visual-icon">
               <Sparkles size={140} strokeWidth={0.5} className="glow-icon" />
            </div>
          </div>

          <div className="contact-links-grid">
            <a href={`mailto:${email}`} className="contact-link-block">
               <div className="link-meta"><Mail size={14} /> EMAIL</div>
               <div className="link-title">{email} <ArrowUpRight size={20} /></div>
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-block">
               <div className="link-meta"><Linkedin size={14} /> LINKEDIN</div>
               <div className="link-title">Connect on LinkedIn <ArrowUpRight size={20} /></div>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="contact-link-block">
               <div className="link-meta"><Github size={14} /> GITHUB</div>
               <div className="link-title">View Projects <ArrowUpRight size={20} /></div>
            </a>
          </div>

          <div className="contact-footer-info">
            <div className="copy-text">© {new Date().getFullYear()} Berkay Gebeş.</div>
            <div className="powered-by">
              <span>Built with <a href="https://antigravity.google/" target="_blank" rel="noopener noreferrer">Google Antigravity</a></span>
              <span>and <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot</a></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
