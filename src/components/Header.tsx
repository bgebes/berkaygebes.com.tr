"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-launch ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="site-logo">
          Berkay Gebeş.
        </Link>
        <nav className="nav-links-modern">
          <Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>home</Link>
          <Link href="/blog" className={`nav-item ${pathname.startsWith('/blog') ? 'active' : ''}`}>blog</Link>
          <Link href="/contents" className={`nav-item ${pathname.startsWith('/contents') ? 'active' : ''}`}>contents</Link>
          <Link href="/lab" className={`nav-item ${pathname.startsWith('/lab') ? 'active' : ''}`}>lab</Link>
          <Link href="/projects" className={`nav-item ${pathname.startsWith('/projects') ? 'active' : ''}`}>projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
