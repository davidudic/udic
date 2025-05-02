'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from './ScrollProgressBar.module.css';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [activeNode, setActiveNode] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  // Sekce webu pro node checkpointy
  const sections = ['home', 'about', 'projects', 'skills', 'contact'];
  
  // Sledování scrollu pro aktivaci nodů
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      
      // Výpočet relativní pozice
      const scrollPercentage = scrollPosition / (docHeight - windowHeight);
      
      // Určení aktivního nodu podle procent scrollu
      const nodeIndex = Math.min(
        Math.floor(scrollPercentage * sections.length),
        sections.length - 1
      );
      
      setActiveNode(nodeIndex);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicializace
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Kliknutí na nod pro navigaci na danou sekci
  const scrollToSection = (index: number) => {
    const sectionId = sections[index];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={styles.progressBarContainer} ref={progressBarRef}>
      <motion.div 
        className={styles.progressTrack}
        style={{ scaleY: scrollYProgress }}
      />
      
      <div className={styles.nodes}>
        {sections.map((section, index) => (
          <div 
            key={index} 
            className={`${styles.nodeWrapper} ${index <= activeNode ? styles.active : ''}`}
            onClick={() => scrollToSection(index)}
          >
            <div className={styles.node}>
              <div className={styles.nodeInner}></div>
              <div className={styles.tooltip}>{section}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollProgressBar;