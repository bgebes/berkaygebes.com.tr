import React from 'react';
import Hero from '../../src/components/Hero';
import Experiences from '../../src/components/Experiences';
import Skills from '../../src/components/Skills';
import Education from '../../src/components/Education';
import Contact from '../../src/components/Contact';

import contentData from '../../src/data/content.json';

export default function Home() {
  const data = contentData.home;
  const config = contentData.contactConfig;

  return (
    <div className="home-page">
      {/* 1. Personal Branding Hero - Large Launch Introduction */}
      <section className="home-wrapper">
        <Hero data={data?.hero} />
      </section>

      {/* 2. Skills Portfolio - Following User Provided Image Design */}
      <section className="home-wrapper-alt">
        <Skills data={data?.skills} />
      </section>

      {/* 3. Education - Timeline Integration */}
      <section className="home-wrapper">
        <Education data={data?.education} />
      </section>

      {/* 4. Full Professional History - Two Columns Unified Design */}
      <section className="home-wrapper-alt">
        <Experiences experiences={data?.experiences as any} events={data?.events as any} />
      </section>

      {/* 5. Direct Connect Footer - Innovative Dark Landing */}
      <section className="home-contact-outer animate-in">
        <Contact data={config} />
      </section>
    </div>
  );
}
