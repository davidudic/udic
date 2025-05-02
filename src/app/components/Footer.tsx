'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { fadeIn } from '@/utils/animation';
import { FaPhone, FaEnvelope, FaRegIdCard } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <motion.div 
          className={styles.footerContent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn('up', 0.3)}
        >
          <div className={styles.footerLogo}>
            <h3>David Udič</h3>
            <div className={styles.underline}></div>
          </div>
          
          <div className={styles.footerInfo}>
            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <a href="tel:+420727828136">+420 727 828 136</a>
            </div>
            
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <a href="mailto:davidudic06fx@gmail.com">davidudic06fx@gmail.com</a>
            </div>
            
            <div className={styles.contactItem}>
              <FaRegIdCard className={styles.contactIcon} />
              <span>IČ: 23181176</span>
            </div>
          </div>
          
          <div className={styles.copyright}>
            <p>&copy; {currentYear} David Udič. Všechna práva vyhrazena.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;