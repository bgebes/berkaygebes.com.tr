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
          <Link href="/lab" className={`nav-item ${pathname.startsWith('/lab') ? 'active' : ''}`}>lab</Link>
          <Link href="/portfolio" className={`nav-item ${pathname.startsWith('/portfolio') ? 'active' : ''}`}>portfolio</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
