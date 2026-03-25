import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const DEFAULT_ARTICLES = [
  { title: "Architecting Intelligent Systems for Smart Cities", date: "Mar 18, 2026", readTime: "8 min read", category: "System Architecture", excerpt: "Exploring the fundamental algorithms and data streams that power autonomous traffic management systems in modern metropolitan areas." },
  { title: "Demystifying Deep Learning in Computer Vision", date: "Feb 05, 2026", readTime: "12 min read", category: "Machine Learning", excerpt: "A deep dive into convolutional neural networks and their practical applications in real-time object detection and classification." },
  { title: "The Evolution of Mobile Development Frameworks", date: "Jan 22, 2026", readTime: "6 min read", category: "Software Engineering", excerpt: "Analyzing the shift from native development to cross-platform solutions like Flutter and React Native in enterprise environments." },
  { title: "Building Resilient APIs with Modern Node.js", date: "Nov 14, 2025", readTime: "10 min read", category: "Backend Development", excerpt: "Best practices for designing scalable, secure, and highly available RESTful APIs for data-intensive applications." }
];

import contentData from '../../../src/data/content.json';

export default function BlogPage() {
  const articles = contentData.blog.articles?.length ? contentData.blog.articles : DEFAULT_ARTICLES;

  return (
    <div className="inner-page-lansman animate-in">
      <div className="container">
        
        <div className="blog-content-wrapper">
          
          <div className="article-tracking-list">
            {(articles || []).map((article: any, i: number) => (
              <Link key={article.id || i} href={`/blog/${article.id || i}`}>
                <article key={i} className="article-list-item">
                  {article.imageUrl && (
                    <div className="article-thumb-mini">
                      <img src={article.imageUrl} alt={article.title} />
                    </div>
                  )}
                  <div className="article-content-side">
                    <div className="article-meta">
                      <span className="article-date">{article.date}</span>
                      <span className="article-divider">•</span>
                      <span className="article-read">{article.readTime}</span>
                      <span className="article-divider">•</span>
                      <span className="article-cat">{article.category}</span>
                    </div>
                    <h2 className="article-title">{article.title}</h2>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-action">
                      <span>READ</span> <ArrowRight size={16} />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
