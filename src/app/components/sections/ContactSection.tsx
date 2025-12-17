'use client';

import { useId, useState } from 'react';
import styles from './ContactSection.module.css';
import { content } from '@/content/content';
import { Reveal } from '../motion/Reveal';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormStatus = {
  isSubmitting: boolean;
  message: string;
  isError: boolean;
};

export function ContactSection() {
  const statusId = useId();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    isSubmitting: false,
    message: '',
    isError: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ isSubmitting: true, message: '', isError: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || `Status: ${response.status}`);

      setFormData({ name: '', email: '', phone: '', message: '' });
      setStatus({
        isSubmitting: false,
        message: 'Díky! Zpráva je odeslaná. Ozvu se co nejdřív.',
        isError: false,
      });
    } catch (error) {
      console.error(error);
      setStatus({
        isSubmitting: false,
        message: 'Nepodařilo se odeslat zprávu. Zkuste to prosím znovu, nebo použijte email/telefon.',
        isError: true,
      });
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.head}>
          <div className={styles.kicker}>Kontakt</div>
          <h2 className={styles.title}>Pojďme to postavit správně</h2>
          <p className={styles.description}>
            Pokud řešíte produkt, web nebo interní nástroj — napište mi. Rád proberu scope, architekturu i UX.
          </p>
        </div>

        <div className={styles.grid}>
          <Reveal>
            <aside className={`${styles.card} ${styles.info}`} aria-label="Rychlý kontakt">
              <h3>Rychlé spojení</h3>
              <div className={styles.links}>
                <a className={styles.link} href={`mailto:${content.contact.email}`}>
                  <span>Email</span>
                  <code>{content.contact.email}</code>
                </a>
                <a className={styles.link} href={`tel:${content.contact.phone.replace(/\s+/g, '')}`}>
                  <span>Telefon</span>
                  <code>{content.contact.phone}</code>
                </a>
                <a className={styles.link} href={content.links.linkedin} target="_blank" rel="noreferrer">
                  <span>LinkedIn</span>
                  <code>linkedin.com/in/david-udic</code>
                </a>
              </div>
              <div className={styles.muted}>{content.contact.businessId}</div>
            </aside>
          </Reveal>

          <Reveal delay={0.05}>
            <div className={styles.card}>
              <form className={styles.form} onSubmit={handleSubmit} aria-describedby={statusId}>
                <div className={styles.row}>
                  <label htmlFor="name">Jméno</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData((v) => ({ ...v, name: e.target.value }))}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className={styles.row}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((v) => ({ ...v, email: e.target.value }))}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className={styles.row}>
                  <label htmlFor="phone">Telefon (volitelné)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((v) => ({ ...v, phone: e.target.value }))}
                    placeholder="+420 xxx xxx xxx"
                    autoComplete="tel"
                  />
                </div>

                <div className={styles.row}>
                  <label htmlFor="message">Zpráva</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((v) => ({ ...v, message: e.target.value }))}
                    required
                  />
                </div>

                <button className={styles.submit} type="submit" disabled={status.isSubmitting}>
                  {status.isSubmitting ? 'Odesílám…' : 'Odeslat'}
                </button>

                <div id={statusId} aria-live="polite">
                  {status.message ? (
                    <div
                      className={`${styles.status} ${status.isError ? styles.statusError : styles.statusOk}`}
                      role="status"
                    >
                      {status.message}
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

