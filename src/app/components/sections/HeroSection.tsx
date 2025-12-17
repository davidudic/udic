import Image from 'next/image';
import { content } from '@/content/content';
import { Reveal } from '../motion/Reveal';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.grid}>
          <Reveal>
            <div>
              <div className={styles.kicker}>{content.person.title}</div>
              <h1 className={styles.headline}>
                Produkty od <span>UI</span> po <span>backend</span>. Bez kompromisů.
              </h1>
              <p className={styles.subhead}>{content.person.summary}</p>

              <div className={styles.actions}>
                <a className={`${styles.button} ${styles.primary}`} href="#work">
                  Projekty
                </a>
                <a className={`${styles.button} ${styles.secondary}`} href="#contact">
                  Kontakt
                </a>
              </div>

              <div className={styles.metaRow} aria-label="Specializace">
                <span className={styles.pill}>UI/UX & Design systems</span>
                <span className={styles.pill}>API & Integrations</span>
                <span className={styles.pill}>PostgreSQL / MongoDB</span>
                <span className={styles.pill}>Testing mindset</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <aside className={styles.panel} aria-label="Profil">
              <div className={styles.panelInner}>
                <div className={styles.panelTop}>
                  <div className={styles.avatar}>
                    <Image
                      src="/me.png"
                      alt={content.person.name}
                      width={124}
                      height={124}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      priority
                    />
                  </div>
                  <div className={styles.panelTitle}>
                    <strong>{content.person.name}</strong>
                    <span>{content.person.location}</span>
                  </div>
                </div>

                <div className={styles.stats} aria-label="Rychlá fakta">
                  {content.person.stats.map((item) => (
                    <div key={item.label} className={styles.stat}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                      <small>{item.hint}</small>
                    </div>
                  ))}
                </div>

                <div className={styles.principles}>
                  <h3>Přístup</h3>
                  <ul>
                    {content.person.principles.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

