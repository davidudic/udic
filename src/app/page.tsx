import StructuredData from './components/StructuredData';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { SiteHeader } from './components/site/SiteHeader';
import { SiteFooter } from './components/site/SiteFooter';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <StructuredData />
      <div id="top" className={styles.page}>
        <SiteHeader />
        <main id="content" className={styles.main} tabIndex={-1}>
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
