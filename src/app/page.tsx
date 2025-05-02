'use client';

import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import Skills from '@/app/components/Skills';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import ScrollProgressBar from '@/app/components/ScrollProgressBar';

export default function Home() {
  // Odstraněna nepoužívaná proměnná scrollProgress a související useState a useEffect
  
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