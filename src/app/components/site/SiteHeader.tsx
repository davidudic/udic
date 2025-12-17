'use client';

import { useEffect, useState } from 'react';
import styles from './SiteHeader.module.css';
import { content } from '@/content/content';

type NavItem = { label: string; href: string };

export function SiteHeader() {
  const navItems: NavItem[] = [
    { label: 'Work', href: '#work' },
    { label: 'Projekty', href: '#projects' },
    { label: 'Zkušenosti', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.bar}>
          <div className={styles.brand}>
            <a className={styles.mark} href="#top" aria-label="Na začátek stránky">
              <span>DU</span>
            </a>
            <div className={styles.title}>
              <div className={styles.name}>{content.person.name}</div>
              <div className={styles.role}>{content.person.title}</div>
            </div>
          </div>

          <nav className={styles.nav} aria-label="Primární navigace">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Zavřít menu"
          onClick={() => setOpen(false)}
        />
        <div className={styles.panel} role="dialog" aria-modal="true" aria-label="Menu">
          <div className={styles.role}>{content.person.location}</div>
          <nav className={styles.panelNav} aria-label="Mobilní navigace">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
