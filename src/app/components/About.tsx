'use client';

import Image from 'next/image';
import styles from './About.module.css';
import { FaCode, FaLaptopCode, FaPaintBrush } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container">
      <div className={styles.about}>
        <h2>O mně</h2>
        
        <div className={styles.content}>
          <div className={styles.imageContainer}>
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
          </div>
          
          <div className={styles.textContent}>
            <p className={styles.bio}>
              Jsem student oboru Informační technologie na SPŠSE Liberec. Zaměřuji se primárně na frontendový 
              vývoj webových aplikací, baví mě React a moderní technologie. Rád tvořím přehledné 
              a funkční UI s přesahem do UX.
            </p>
            
            <div className={styles.skillCards}>
              <div className={styles.skillCard}>
                <div className={styles.iconContainer}>
                  <FaLaptopCode />
                </div>
                <h3>Frontend</h3>
                <p>Vývoj moderních webových aplikací s důrazem na uživatelský zážitek.</p>
              </div>
              
              <div className={styles.skillCard}>
                <div className={styles.iconContainer}>
                  <FaCode />
                </div>
                <h3>Technologie</h3>
                <p>React, Next.js, JavaScript a další moderní nástroje pro efektivní vývoj.</p>
              </div>
              
              <div className={styles.skillCard}>
                <div className={styles.iconContainer}>
                  <FaPaintBrush />
                </div>
                <h3>Design</h3>
                <p>Důraz na estetiku a funkcionalitu pro vytváření intuitivních rozhraní.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;