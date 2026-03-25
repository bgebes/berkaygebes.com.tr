import React from 'react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <h2 className="section-title">writing & blog</h2>
        
        <div className="blog-list">
          <div className="blog-item">
            <span className="blog-date">Mar 2026</span>
            <h3 className="blog-post-title">Artificial Intelligence in Intelligent Transportation</h3>
            <p className="blog-excerpt">Analyzing the impact of shared mobility and smart city infrastructures on the future of public transit.</p>
          </div>
          <div className="blog-item">
            <span className="blog-date">Feb 2026</span>
            <h3 className="blog-post-title">Getting Started with Mobile Application Development</h3>
            <p className="blog-excerpt">Insights from my 13-week course on building scalable mobile solutions using modern frameworks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
