import { content } from '@/content/content';
import { Reveal } from '../motion/Reveal';
import styles from './SkillsSection.module.css';

export function SkillsSection() {
  return (
    <section className={styles.section} id="skills">
      <div className="container">
        <div className={styles.head}>
          <div className={styles.kicker}>Skills</div>
          <h2 className={styles.title}>Stack, který pokrývá celý produkt</h2>
          <p className={styles.description}>
            Frontend i backend, databáze, mobilní integrace a tooling. Výběr podle toho, co dává smysl pro produkt.
          </p>
        </div>

        <div className={styles.grid}>
          {content.skills.map((group, idx) => (
            <Reveal key={group.title} delay={Math.min(idx * 0.05, 0.2)}>
              <article className={styles.card}>
                <div className={styles.cardTitle}>{group.title}</div>
                <div className={styles.items} aria-label={`${group.title} skills`}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

