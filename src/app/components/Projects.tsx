'use client';

import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import { fadeIn, staggerContainer } from '@/utils/animation';
import { FaExternalLinkAlt, FaUtensils, FaTooth, FaChartLine } from 'react-icons/fa';
import { Project } from '@/types';
import Image from 'next/image';

const projects: Project[] = [
  {
    id: 1,
    title: 'JAKOBY',
    description: 'Moderní webové prezentace pro restauraci & bar v centru Brna. Vychutnejte si skvělou atmosféru na vyhláseném Jakubském náměstí.',
    technologies: ['React', 'Next.js', 'CSS3', 'JavaScript', 'Restaurant Design'],
    live: 'https://restauracejakoby.cz',
    image: '/project1.png'
  },
  {
    id: 2,
    title: 'LA DENTA',
    description: 'Komplexní webové řešení pro rodinnou zubní kliniku v Holešovicích. Moderní design s důrazem na profesionalitu a důvěru.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'UX/UI Design'],
    live: 'https://www.ladenta.cz',
    image: '/project2.png'
  },
  {
    id: 3,
    title: 'Kateřina Bendová',
    description: 'Profesionální portfolio pro finančního poradce. Elegantní design prezentující služby a budující důvěru s potenciálními klienty.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Financial Advisory'],
    live: 'https://katerinabendova.cz',
    image: '/project3.png'
  }
];

const Projects = () => {
  const getProjectIcon = (index: number) => {
    switch(index) {
      case 0: return <FaUtensils />;
      case 1: return <FaTooth />;
      case 2: return <FaChartLine />;
      default: return null;
    }
  };

  return (
    <div className="container">
      <motion.div 
        variants={staggerContainer(0.2, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className={styles.projects}
      >
        <motion.h2 
          variants={fadeIn('right', 0.2)}
          className={styles.projectsHeading}
        >
          Moje práce
        </motion.h2>
        
        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={styles.projectCard}
              variants={fadeIn('up', 0.3 + index * 0.2)}
              whileHover="hover"
            >
              <motion.div 
                className={styles.projectImage}
                variants={{
                  hover: { scale: 1.1 }
                }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={500}
                  height={300}
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </motion.div>
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3>{project.title}</h3>
                  <div className={styles.projectIcon}>
                    {getProjectIcon(index)}
                  </div>
                </div>
                <p>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Navštívit web
                  </a>
                </div>
              </div>
              <motion.div 
                className={styles.cardBorder}
                variants={{
                  hover: { scaleX: 1, opacity: 1 }
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;