'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import Skills from '@/app/components/Skills';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import ScrollProgressBar from '@/app/components/ScrollProgressBar';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   return (
    <main>
      <Navbar />
      <ScrollProgressBar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}