"use client"
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from 'lucide-react';
import contentData from '../../../../src/data/content.json';

const ArticleDetail: React.FC = () => {
    const params = useParams();
    const router = useRouter();
    const [article, setArticle] = useState<any>(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        if (!params.id) return;
        
        const foundArticle = contentData.blog.articles.find((a: any) => String(a.id) === String(params.id)) || contentData.blog.articles[Number(params.id)];
        
        if (!foundArticle) {
            router.push('/blog');
            return;
        }
        
        setArticle(foundArticle);
        
        setLoading(false);
    }, [params.id, router]);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Share failed', err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    if (loading) {
        return (
            <div className="inner-page-lansman">
                <div className="container">
                    <div className="loading-shimmer-article">
                        <div className="shimmer-line title-shim"></div>
                        <div className="shimmer-line text-shim"></div>
                        <div className="shimmer-box image-shim"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!article) return null;

    return (
        <div className="inner-page-lansman animate-in">
            <div className="container">
                <article className="article-detailed-view">
                    <header className="article-detailed-header">
                        <div className="article-detailed-meta">
                            <Link href="/blog" className="back-arrow-minimal" title="Back">
                                <ArrowLeft size={20} strokeWidth={2.5} />
                            </Link>
                            <span className="meta-item"><Calendar size={14} strokeWidth={2.5}/> {article.date}</span>
                            <span className="meta-item"><Clock size={14} strokeWidth={2.5}/> {article.readTime}</span>
                            <span className="meta-item"><Tag size={14} strokeWidth={2.5}/> {article.category}</span>
                        </div>
                        <h1 className="article-detailed-title">{article.title}</h1>
                        <p className="article-detailed-excerpt">{article.excerpt}</p>
                    </header>

                    {article.imageUrl && (
                        <div className="article-detailed-image animate-in" style={{ animationDelay: '0.2s' }}>
                            <img src={article.imageUrl} alt={article.title} />
                        </div>
                    )}

                    <div 
                        className="article-detailed-content rich-text-body animate-in"
                        style={{ animationDelay: '0.3s' }}
                        dangerouslySetInnerHTML={{ __html: article.content || '' }}
                    />

                    <footer className="article-detailed-footer animate-in" style={{ animationDelay: '0.4s' }}>
                        <div className="article-share-section">
                            <h4 className="share-title">Interact with this research</h4>
                            <div className="share-buttons">
                                <button className="share-btn" onClick={handleShare}>
                                    <Share2 size={18} /> Share
                                </button>
                            </div>
                        </div>
                    </footer>
                </article>
            </div>
        </div>
    );
};

export default ArticleDetail;
