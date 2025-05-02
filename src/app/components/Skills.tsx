'use client';

import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { fadeIn, staggerContainer } from '@/utils/animation';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJs, FaNpm, 
  FaFigma, FaNode, FaCode, FaSearch
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiMongodb, SiVercel,
  SiVite, SiJsonwebtokens, SiDotnet, SiDocker
} from 'react-icons/si';
import { ReactNode } from 'react';
import { FaDatabase } from 'react-icons/fa';
import { SiSqlite } from 'react-icons/si';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon: ReactNode;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, level: 100 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 100 },
      { name: 'JavaScript', icon: <FaJs />, level: 85 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 90 },
      { name: 'SEO optimalizace', icon: <FaSearch />, level: 95 },
      { name: 'HTML', icon: <FaHtml5 />, level: 85 },
      { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNode />, level: 75 },
      { name: '.NET', icon: <SiDotnet />, level: 70 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 70 },
      { name: 'JWT', icon: <SiJsonwebtokens />, level: 75 },
      { name: 'SQL', icon: <FaDatabase />, level: 80 },
      { name: 'SQLite', icon: <SiSqlite />, level: 75 },
    ]
  },
  {
    name: 'Nástroje',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 85 },
      { name: 'VS Code', icon: <FaCode />, level: 90 },
      { name: 'npm', icon: <FaNpm />, level: 80 },
      { name: 'Figma', icon: <FaFigma />, level: 70 },
      { name: 'Vercel', icon: <SiVercel />, level: 75 },
      { name: 'Vite', icon: <SiVite />, level: 70 },
      { name: 'Docker', icon: <SiDocker />, level: 65 },
    ]
  }
];

// Pomocná funkce pro určení velikosti hexagonu podle úrovně dovednosti
const getHexSize = (level: number): string => {
  if (level >= 90) return styles.hexExpert;
  if (level >= 80) return styles.hexAdvanced;
  if (level >= 70) return styles.hexIntermediate;
  return styles.hexBeginner;
};

// Pomocná funkce pro získání barvy podle kategorie
const getCategoryColor = (categoryName: string): string => {
  switch (categoryName) {
    case 'Frontend':
      return styles.frontendCategory;
    case 'Backend':
      return styles.backendCategory;
    case 'Nástroje':
      return styles.toolsCategory;
    default:
      return '';
  }
};

const Skills = () => {
  return (
    <div className="container">
      <motion.div 
        variants={staggerContainer(0.2, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className={styles.skills}
      >
        <motion.h2 
          variants={fadeIn('right', 0.2)}
          className={styles.skillsHeading}
        >
          Dovednosti
        </motion.h2>
        
        <div className={styles.skillsContainer}>
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.name}
              className={styles.categorySection}
              variants={fadeIn('up', 0.3 + catIndex * 0.1)}
            >
              <h3 className={`${styles.categoryHeading} ${getCategoryColor(category.name)}`}>
                {category.name}
              </h3>
              
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={`${category.name}-${skill.name}`}
                    className={`${styles.skillItem} ${getHexSize(skill.level)}`}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    variants={fadeIn('up', 0.3 + (catIndex * 0.1) + (skillIndex * 0.05))}
                  >
                    <div className={styles.hexagon}>
                      <div className={styles.hexContent}>
                        <div className={styles.skillIcon}>
                          {skill.icon}
                        </div>
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                    </div>
                    
                    <div className={styles.skillTooltip}>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                      <div className={styles.tooltipBar}>
                        <div 
                          className={styles.tooltipFill} 
                          style={{width: `${skill.level}%`}}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className={styles.skillsDescription}
          variants={fadeIn('up', 0.5)}
        >
          <p>
            Neustále se zdokonaluji v nových technologiích a rozšiřuji své znalosti. 
            Mám zájem o moderní webové frameworky a nástroje, které zefektivňují vývoj
            a zlepšují uživatelský zážitek.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;