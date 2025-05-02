'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Domů', href: '#home' },
  { name: 'O mně', href: '#about' },
  { name: 'Projekty', href: '#projects' },
  { name: 'Dovednosti', href: '#skills' },
  { name: 'Kontakt', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home">DU</a>
        </div>
        
        <div className={styles.menuButton} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;