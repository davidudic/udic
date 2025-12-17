import styles from './SiteFooter.module.css';
import { content } from '@/content/content';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <div className={styles.name}>{content.person.name}</div>
            <div className={styles.meta}>
              {content.person.title} · {content.person.location}
            </div>
          </div>

          <div className={styles.links} aria-label="Odkazy">
            <a className={styles.link} href="#top">
              Nahoru
            </a>
            <a className={styles.link} href={content.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span className={styles.meta}>© {year}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
