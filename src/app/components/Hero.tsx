'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.css';
import { fadeIn } from '@/utils/animation';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const phrases = [
    'student IT',
    'nadšenec do IT',
    'frontend vývojář',
    'kóder webů',
    'React developer'
  ];
  
  const currentPhrase = phrases[loopNum % phrases.length];
  
  const handleTyping = useCallback(() => {
    // Dokončení aktuální fráze
    if (!isDeleting && text === currentPhrase) {
      // Počkej, než začne mazání
      setTypingSpeed(1000);
      setIsDeleting(true);
      return;
    }
    
    // Smazání fráze
    if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
      return;
    }
    
    // Psaní nebo mazání znaků
    const newText = isDeleting
      ? text.substring(0, text.length - 1)
      : currentPhrase.substring(0, text.length + 1);
    
    setText(newText);
    
    // Nastav rychlost psaní a mazání
    if (isDeleting) {
      setTypingSpeed(80);
    } else {
      setTypingSpeed(150);
    }
  }, [text, isDeleting, loopNum, currentPhrase]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [handleTyping, typingSpeed]);
  
  return (
    <div className={styles.hero}>
      <div className={styles.backgroundDecoration}>
        <div className={styles.decorationShape1}></div>
        <div className={styles.decorationShape2}></div>
        <div className={styles.decorationShape3}></div>
      </div>
      
      <div className="container">
        <motion.div 
          className={styles.content}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn('up', 0.3)}
        >
          <h1>David Udič</h1>
          <div className={styles.titleUnderline}></div>
          
          <div className={styles.intro}>
            <p>Vítejte na mém portfoliu</p>
            <div className={styles.typingContainer}>
              <span className={styles.staticText}>Jsem</span>
              <div className={styles.dynamicTextWrapper}>
                <span className={styles.dynamicText}>{text}</span>
                <span className={styles.cursor}>|</span>
              </div>
            </div>
          </div>
          
          <div className={styles.cta}>
            <a href="#projects" className={styles.primaryBtn}>
              <span>Moje projekty</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              <span>Kontaktujte mě</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
          
          <motion.div 
            className={styles.scrollDown}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;