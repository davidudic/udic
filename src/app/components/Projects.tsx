'use client';

import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import { fadeIn, staggerContainer } from '@/utils/animation';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '@/types';
import Image from 'next/image';

const projects: Project[] = [
  {
    id: 1,
    title: 'Projekt 1',
    description: 'Webová aplikace vytvořená v Reactu s využitím moderních technologií a postupů.',
    technologies: ['React', 'Next.js', 'CSS Modules'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/project1.png'
  },
  {
    id: 2,
    title: 'Projekt 2',
    description: 'Responzivní e-commerce řešení s integrací platební brány a správou produktů.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/project2.png'
  },
  {
    id: 3,
    title: 'Projekt 3',
    description: 'Mobilní aplikace pro sledování osobních financí s vizualizacemi a statistikami.',
    technologies: ['React Native', 'Firebase', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/project3.png'
  }
];

const Projects = () => {
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
          Projekty
        </motion.h2>
        
        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={styles.projectCard}
              variants={fadeIn('up', 0.3 + index * 0.2)}
            >
              <div className={styles.projectImage}>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={500}
                  height={300}
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;