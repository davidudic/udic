import { content } from '@/content/content';
import { Reveal } from '../motion/Reveal';
import styles from './ExperienceSection.module.css';

export function ExperienceSection() {
  return (
    <section className={styles.section} id="experience">
      <div className="container">
        <div className={styles.head}>
          <div className={styles.kicker}>Experience</div>
          <h2 className={styles.title}>Zkušenosti</h2>
          <p className={styles.description}>
            UI, backend, databáze i integrace. Stavím věci, které jsou použitelné v praxi a dobře se udržují.
          </p>
        </div>

        <div className={styles.timeline}>
          {content.experience.map((item, idx) => (
            <Reveal key={item.company} delay={idx * 0.05}>
              <div className={styles.item}>
                <div className={styles.dot} aria-hidden />
                <article className={styles.card}>
                  <div className={styles.top}>
                    <div>
                      <div className={styles.company}>{item.company}</div>
                      <div className={styles.role}>{item.role}</div>
                    </div>
                    <div className={styles.meta} aria-label="Období a lokalita">
                      <span>{item.period}</span>
                      {item.location ? <span>{item.location}</span> : null}
                    </div>
                  </div>

                  <ul className={styles.bullets}>
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

