'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJs, FaNpm, 
  FaFigma, FaNode, FaCode, FaSearch, FaDatabase
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiMongodb, SiVercel,
  SiVite, SiJsonwebtokens, SiDotnet, SiDocker, SiSqlite
} from 'react-icons/si';
import { ReactNode } from 'react';

interface Skill {
  name: string;
  icon: ReactNode;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: <FaReact />, level: 90, category: 'frontend' },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 85, category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 80, category: 'frontend' },
  { name: 'JavaScript', icon: <FaJs />, level: 85, category: 'frontend' },
  { name: 'HTML', icon: <FaHtml5 />, level: 90, category: 'frontend' },
  { name: 'CSS', icon: <FaCss3Alt />, level: 85, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: <FaNode />, level: 75, category: 'backend' },
  { name: '.NET', icon: <SiDotnet />, level: 70, category: 'backend' },
  { name: 'MongoDB', icon: <SiMongodb />, level: 70, category: 'backend' },
  { name: 'SQL', icon: <FaDatabase />, level: 75, category: 'backend' },
  
  // Tools
  { name: 'Git', icon: <FaGitAlt />, level: 85, category: 'tools' },
  { name: 'VS Code', icon: <FaCode />, level: 90, category: 'tools' },
  { name: 'Figma', icon: <FaFigma />, level: 70, category: 'tools' },
  { name: 'Vercel', icon: <SiVercel />, level: 80, category: 'tools' },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend': return 'var(--accent-primary)';
      case 'backend': return 'var(--accent-secondary)';
      case 'tools': return '#f59e0b';
      default: return 'var(--accent-primary)';
    }
  };

  return (
    <div className="container">
      <section ref={sectionRef} className={`${styles.skills} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.header}>
          <h2>Dovednosti</h2>
          <p>Technologie a nástroje, které používám při vývoji</p>
        </div>

        {/* Category Filter */}
        <div className={styles.categoryFilter}>
          {[
            { key: 'all', label: 'Všechny' },
            { key: 'frontend', label: 'Frontend' },
            { key: 'backend', label: 'Backend' },
            { key: 'tools', label: 'Nástroje' }
          ].map((category) => (
            <button
              key={category.key}
              className={`${styles.filterButton} ${activeCategory === category.key ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.key as any)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name} 
              className={styles.skillCard}
              style={{'--category-color': getCategoryColor(skill.category)} as React.CSSProperties}
            >
              <div className={styles.skillIcon}>
                {skill.icon}
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <div className={styles.skillLevel}>
                <div className={styles.levelBackground}>
                  <div 
                    className={styles.levelFill}
                    style={{width: isVisible ? `${skill.level}%` : '0%'}}
                  ></div>
                </div>
                <span className={styles.levelText}>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.description}>
          <p>
            Neustále se vzdělávám v nových technologiích a rozšiřuji své znalosti. 
            Baví mě sledovat trendy ve webovém vývoji a experimentovat s novými nástroji.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Skills;