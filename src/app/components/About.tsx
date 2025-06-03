'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';
import { fadeIn, staggerContainer } from '@/utils/animation';
import { FaCode, FaLaptopCode, FaPaintBrush } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container">
      <motion.div 
        variants={staggerContainer(0.2, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className={styles.about}
      >
        <motion.h2 variants={fadeIn('right', 0.2)}>O mně</motion.h2>
        
        <div className={styles.content}>
          <motion.div 
            className={styles.imageContainer}
            variants={fadeIn('right', 0.3)}
          >
            <div className={styles.imageBorder}>
              <Image 
                src="/me.png" 
                alt="David Udič" 
                width={300} 
                height={300} 
                className={styles.image}
              />
            </div>
            <div className={styles.imageShadow}></div>
            <div className={styles.imageDecoration}></div>
          </motion.div>
          
          <motion.div 
            className={styles.textContent}
            variants={fadeIn('left', 0.3)}
          >
            <p className={styles.bio}>
              Jsem student oboru Informační technologie na SPŠSE Liberec. Zaměřuji se primárně na frontendový 
              vývoj webových aplikací, baví mě React a moderní technologie. Rád tvořím přehledné 
              a funkční UI s přesahem do UX.
            </p>
            
            <div className={styles.skillCards}>
              <motion.div 
                className={styles.skillCard}
                whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                variants={fadeIn('up', 0.4)}
              >
                <div className={styles.iconContainer}>
                  <FaLaptopCode />
                </div>
                <h3>Frontend</h3>
                <p>Vývoj moderních webových aplikací s důrazem na uživatelský zážitek.</p>
              </motion.div>
              
              <motion.div 
                className={styles.skillCard}
                whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                variants={fadeIn('up', 0.5)}
              >
                <div className={styles.iconContainer}>
                  <FaCode />
                </div>
                <h3>Technologie</h3>
                <p>React, Next.js, JavaScript a další moderní nástroje pro efektivní vývoj.</p>
              </motion.div>
              
              <motion.div 
                className={styles.skillCard}
                whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                variants={fadeIn('up', 0.6)}
              >
                <div className={styles.iconContainer}>
                  <FaPaintBrush />
                </div>
                <h3>Design</h3>
                <p>Důraz na estetiku a funkcionalitu pro vytváření intuitivních rozhraní.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;